import { inject, observer } from "mobx-react";
import { Space } from "../../common/Space/Space";
import { Block, Elem } from "../../utils/bem";
import { AnnotationHistory } from "./AnnotationHistory.tsx";
import { useRegionsCopyPaste } from "../../hooks/useRegionsCopyPaste";
import "./CurrentEntity.scss";

const injector = inject("store");

export const CurrentEntity = injector(
  observer(({ entity, showHistory = true }) => {
    useRegionsCopyPaste(entity);

    return entity ? (
      <Block name="annotation" onClick={(e) => e.stopPropagation()}>
        {/* <Elem name="info" tag={Space} spread>
        <Elem name="id">
          {entity.type === 'annotation' ? <LsAnnotation /> : <LsSparks color="#944BFF"/>}
          <span className="text_id">ID: {entity.pk ?? entity.id}</span>
        </Elem>
      </Elem> */}

        {/* <Elem name="parent_info">
        <Space size="small"> */}
        {/*Always show container to keep the interface layout unchangeable*/}
        {/* {(entity.parent_prediction) && (
            <Tooltip title="Prediction ID from which this annotation was created">
              <Elem name="parent">
                <Elem tag={LsParentLink} name="parent_link"/>
                <Elem tag={LsSparks} name="parent_icon" mod={{ prediction: true }}/>
                <Elem name="parent_text">ID: { entity.parent_prediction }</Elem>
              </Elem>
            </Tooltip>
          )}
          {(entity.parent_annotation) && (
            <Tooltip title="Parent annotation ID from which this annotation was created">
              <Elem name="parent">
                <Elem tag={LsParentLink} name="parent_link"/>
                <Elem tag={LsAnnotation} name="parent_icon" mod={{ annotation: true }}/>
                <Elem name="parent_text">ID: { entity.parent_annotation }</Elem>
              </Elem>
            </Tooltip>
          )} */}
        {/* </Space>
      </Elem> */}

        {/* {showHistory && !entity.userGenerate && ( */}
        {showHistory && (
          <Elem tag={Space} spread name="title">
            Annotation History
            <Elem name="id">#{entity.pk ?? entity.id}</Elem>
          </Elem>
        )}
        <AnnotationHistory enabled={showHistory} />
      </Block>
    ) : null;
  }),
);
