import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../../utils/bem";
import { Tooltip } from "../Tooltip/Tooltip";
import "./Userpic.scss";

const FALLBACK_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const Userpic = forwardRef(
  ({ badge = null, className, faded = false, showUsername, size, src, style, user, username, ...rest }, ref) => {
    const imgRef = useRef();
    const [finalUsername, setFinalUsername] = useState(username);
    const [finalSrc, setFinalSrc] = useState(user?.avatar ?? src);
    const [imgVisible, setImgVisible] = useState(false);
    const [nameVisible, setNameVisible] = useState(true);
    const userPicCN = cn("userpic-dm");

    if (size) {
      style = Object.assign({ width: size, height: size, fontSize: size * 0.4 }, style);
    }

    useEffect(() => {
      if (user) {
        const { first_name, last_name, email, initials, username } = user;

        if (initials) {
          setFinalUsername(initials);
        } else if (username) {
          setFinalUsername(username);
        } else if (first_name || last_name) {
          setFinalUsername((first_name?.[0] ?? "") + (last_name?.[0] ?? ""));
        } else if (email) {
          setFinalUsername(email.substring(0, 2));
        }

        if (user.avatar) setFinalSrc(user.avatar);
      } else {
        setFinalUsername(username);
        setFinalSrc(src);
      }
    }, [user]);

    const onImageLoaded = useCallback(() => {
      setImgVisible(true);
      if (finalSrc !== FALLBACK_IMAGE) setNameVisible(false);
    }, [finalSrc]);

    const userpic = (
      <div ref={ref} className={userPicCN.mix(className).mod({ faded }).toString()} style={style} {...rest}>
        <img
          className={userPicCN.elem("avatar").mod({ faded }).toString()}
          ref={imgRef}
          src={finalSrc}
          alt={(finalUsername ?? "").toUpperCase()}
          style={{ opacity: imgVisible ? (faded ? 0.3 : 1) : 0 }}
          onLoad={onImageLoaded}
          onError={() => setFinalSrc(FALLBACK_IMAGE)}
        />
        {nameVisible && (
          <span className={userPicCN.elem("username").toString()}>{(finalUsername ?? "").toUpperCase()}</span>
        )}

        {badge &&
          Object.entries(badge).map(([align, content], i) => {
            return (
              <span
                key={`badge-${i}`}
                className={userPicCN
                  .elem("badge")
                  .mod({ [align]: true })
                  .toString()}
              >
                {content}
              </span>
            );
          })}
      </div>
    );

    const userFullName = useMemo(() => {
      if (user?.first_name || user?.last_name) {
        return `${user?.first_name ?? ""} ${user?.last_name ?? ""}`.trim();
      }
      if (user?.email) {
        return user.email;
      }
      return username;
    }, [user, username]);

    return showUsername && userFullName ? <Tooltip title={userFullName}>{userpic}</Tooltip> : userpic;
  },
);

Userpic.displayName = "Userpic";
