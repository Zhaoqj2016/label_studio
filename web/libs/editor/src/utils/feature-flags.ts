// Outliner + Details
export const FF_DEV_1170 = "ff_front_1170_outliner_030222_short";

/**
 * Fixing "Auto Detect" tool undo functionality and bugs with skipNextUndoState.
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_dev_1284_auto_detect_undo_281022_short
 */
export const FF_DEV_1284 = "fflag_fix_front_dev_1284_auto_detect_undo_281022_short";

export const FF_DEV_1442 = "ff_front_dev_1442_unselect_shape_on_click_outside_080622_short";

// User labels for Taxonomy
export const FF_DEV_1536 = "ff_front_dev_1536_taxonomy_user_labels_150222_long";

// New Audio 2.0 UI
export const FF_DEV_1713 = "ff_front_DEV_1713_audio_ui_150222_short";

export const FF_DEV_2432 = "ff_front_dev_2432_auto_save_polygon_draft_210622_short";

export const FF_DEV_2669 = "ff_front_dev_2669_paragraph_author_filter_210622_short";

// Change the rotate tool from bbox
export const FF_DEV_2671 = "ff_front_dev_2671_anchor_rotate_bbox_010722_short";

/**
 * Audio v3 - new Audio UI Library
 * @link https://app.launchdarkly.com/default/production/features/ff_front_dev_2715_audio_3_280722_short
 */
export const FF_DEV_2715 = "ff_front_dev_2715_audio_3_280722_short";

export const FF_DEV_2755 = "fflag_feat_dev_2755_regions_list_grouped_by_labels_with_ordered_collapse_short";

/**
 * Creating separated regions if selection includes hidden phrases
 * @see FF_DEV_2669 (allows filtering)
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_dev_2918_labeling_filtered_paragraphs_250822_short
 */
export const FF_DEV_2918 = "fflag_fix_front_dev_2918_labeling_filtered_paragraphs_250822_short";

export const FF_DEV_3034 = "fflag-feat-dev-3034-comments-with-drafts-short";

export const FF_DEV_3077 = "fflag_feat_front_dev_3077_repeater_tag_loading_performance_short";

/**
 * Correction of image and stage size. It also affects the zoom position restrictions.
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_dev_3377_image_regions_shift_on_resize_280922_short
 */
export const FF_DEV_3377 = "fflag_fix_front_dev_3377_image_regions_shift_on_resize_280922_short";

// Refactoring to use separate trees for every annotation to allow real annotations in View All
export const FF_DEV_3391 = "fflag_fix_front_dev_3391_interactive_view_all";

/**
 * Addresses the memory leak issue in Taxonomy with Repeater
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_dev_3617_taxonomy_memory_leaks_fix
 */
export const FF_DEV_3617 = "fflag_fix_front_dev_3617_taxonomy_memory_leaks_fix";

/**
 * Fixing maxUsages prop of *labels on region creation.
 * @link https://app.launchdarkly.com/default/test/features/fflag_fix_front_dev_3666_max_usages_on_region_creation_171122_short
 */
export const FF_DEV_3666 = "fflag_fix_front_dev_3666_max_usages_on_region_creation_171122_short";

/**
 * Fixing "Auto Detect" tool undo functionality and bugs with skipNextUndoState.
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_dev_1284_auto_detect_undo_281022_short
 */
export const FF_DEV_3873 = "fflag_feat_front_dev_3873_labeling_ui_improvements_short";

// Use only relative coords internally to improve performance and reduce bugs
export const FF_DEV_3793 = "fflag_fix_front_dev_3793_relative_coords_short";

/**
 * Label stream ablation experiment for solving overlap issue
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_back_dev_4174_overlap_issue_experiments_10012023_short
 */
export const FF_DEV_4174 = "fflag_fix_back_dev_4174_overlap_issue_experiments_10012023_short";

/**
 * Contextual scrolling of Paragraph segments with Audio V0
 * @link https://app.launchdarkly.com/default/production/features/fflag_feat_front_lsdv_e_278_contextual_scrolling_short/targeting
 */
export const FF_LSDV_E_278 = "fflag_feat_front_lsdv_e_278_contextual_scrolling_short";

/**
 * Annotations with LLM assistance
 * @link https://app.launchdarkly.com/default/production/features/fflag_feat_all_lsdv_e_294_llm_annotations_180723_long
 */
export const FF_LLM_EPIC = "fflag_feat_all_lsdv_e_294_llm_annotations_180723_long";

/**
 * Multi-image segmentation support via `valueList`
 */
export const FF_LSDV_4583 = "fflag_feat_front_lsdv_4583_multi_image_segmentation_short";

/**
 * Enables new way of preloading/caching images
 */
export const FF_LSDV_4583_6 = "fflag_feat_front_lsdv_4583_6_images_preloading_short";

/**
 * Removing interrupting from the draft saving
 *
 * Without this flag we have a situation when changes in history leading to the empty results break functionality of adding comments and make the draft saving process indicator stay forever.
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_font_lsdv_3009_draft_saving_stuck_130223_short
 */
export const FF_LSDV_3009 = "fflag_fix_font_lsdv_3009_draft_saving_stuck_130223_short";

/**
 * Allows to count time spend on textarea results and store it to lead_time meta field
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_lsdv_4600_lead_time_27072023_short
 */
export const FF_LEAD_TIME = "fflag_fix_front_lsdv_4600_lead_time_27072023_short";

/**
 * Reworking of RichText to optimize its work with DOM and decrease response time with a large number of regions.
 * It also fixes scenarios of working with hidden regions
 * and edge cases for creating spans inside other spans.
 *
 * @link https://app.launchdarkly.com/default/production/features/fflag_feat_front_lsdv_4620_richtext_opimization_060423_short
 */
export const FF_LSDV_4620_3 = "fflag_feat_front_lsdv_4620_richtext_opimization_060423_short";

/**
 * Fixes memory leaks in label studio frontend relative to mobx-state-tree and react usage
 *
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_lsdv_4620_memory_leaks_100723_short
 */
export const FF_LSDV_4620_3_ML = "fflag_fix_front_lsdv_4620_memory_leaks_100723_short";

/**
 * Improving the responsiveness of the interface when working with the list of regions in the outliner
 *
 * @link https://app.launchdarkly.com/default/production/features/fflag_feat_front_lsdv_4620_outliner_optimization_310723_short
 */
export const FF_OUTLINER_OPTIM = "fflag_feat_front_lsdv_4620_outliner_optimization_310723_short";

/**
 * Fixes how presigned urls are generated and accessed to remove possibility of CORS errors.
 */
export const FF_LSDV_4711 = "fflag_fix_all_lsdv_4711_cors_errors_accessing_task_data_short";

/** Fix "No Label" for Dynamic Labels by switching off missing labels removal */
export const FF_LSDV_4988 = "fflag_fix_front_lsdv_4988_dynamic_no_label_120523_short";

/**
 * Fixing issues related to selection tool functional (selecting hidden regions, onClick in Konva, interaction with regions inside selection area)
 *
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_lsdv_4930_selection_tool_fixes_240423_short
 */
export const FF_LSDV_4930 = "fflag_fix_front_lsdv_4930_selection_tool_fixes_240423_short";

/**
 * Restore "hide all regions" button functionality in the outliner
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_lsdv_4992_hide_all_regions_04052023_short
 */
export const FF_LSDV_4992 = "fflag_fix_front_lsdv_4992_hide_all_regions_04052023_short";

/**
 * Resetting shared stores on task change to correctly generate dynamic children
 * @see: fflag_fix_front_dev_3617_taxonomy_memory_leaks_fix: To enable shared store
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_lsdv_4998_missed_dynamic_children_030523_short
 */
export const FF_LSDV_4998 = "fflag_fix_front_lsdv_4998_missed_dynamic_children_030523_short";

/**
 * Allow to load Taxonomy from remote API
 * @link https://app.launchdarkly.com/default/production/features/fflag_feat_front_lsdv_5451_async_taxonomy_110823_short
 */
export const FF_TAXONOMY_ASYNC = "fflag_feat_front_lsdv_5451_async_taxonomy_110823_short";

export const FF_LEAP_218 = "fflag_fix_front_leap_218_improve_performance_of_taxonomy_search_short";

/**
 * Allow to label NER directly with Taxonomy instead of Labels
 * @link https://app.launchdarkly.com/default/production/features/fflag_feat_front_lsdv_5452_taxonomy_labeling_110823_short
 */
export const FF_TAXONOMY_LABELING = "fflag_feat_front_lsdv_5452_taxonomy_labeling_110823_short";

/**
 * Fix task count on projects with over 100 tasks (switch from task history to queue count)
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_all_optic_79_task_count_is_wrong_short/targeting
 */

export const FF_TASK_COUNT_FIX = "fflag_fix_all_optic_79_task_count_is_wrong_short";

/** Select annotation only once during store init and trigger the rest from this select */
export const FF_SIMPLE_INIT = "fflag_fix_front_leap_443_select_annotation_once";

/**
 * Optimize stage rendering for large number of regions and zoom interactions
 * @link https://app.launchdarkly.com/default/production/features/fflag_fix_front_leap_32_zoom_perf_190923_short/targeting
 */
export const FF_ZOOM_OPTIM = "fflag_fix_front_leap_32_zoom_perf_190923_short";

export const FF_SAFE_TEXT = "fflag_fix_leap_466_text_sanitization";

export const FF_MULTI_OBJECT_HOTKEYS = "fflag_fix_leap_246_multi_object_hotkeys_160124_short";

/**
 * It changes the reviewer flow to be more user-friendly and intuitive.
 */
export const FF_REVIEWER_FLOW = "fflag_feat_all_leap_1081_reviewer_flow_updates";

export const FF_CUSTOM_SCRIPT = "fflag_feat_all_leap_883_custom_script_270524_short";

/**
 * Self Serve
 * @link https://app.launchdarkly.com/default/test/features/fflag_feat_front_leap_482_self_serve_short/
 */
export const FF_SELF_SERVE = "fflag_feat_front_leap_482_self_serve_short";

/**
 * It adds functionality of bulk annotation
 */
export const FF_BULK_ANNOTATION = "fflag_feat_all_leap_1181_bulk_annotation_short";

/**
 * Disable the postpone option if the skip interface isn't set
 * @link https://app.launchdarkly.com/projects/default/flags/fflag_feat_front_leap_1173_disable_postpone_skip_short
 */
export const FF_LEAP_1173 = "fflag_feat_front_leap_1173_disable_postpone_skip_short";

export const FF_PER_FIELD_COMMENTS = "fflag_feat_all_leap_1430_per_field_comments_100924_short";

Object.assign(window, {
  APP_SETTINGS: {
    ...(window.APP_SETTINGS ?? {}),
    feature_flags: {
      ...(window.APP_SETTINGS?.feature_flags ?? {}),
      ...(window.FEATURE_FLAGS ?? {}),
    },
  },
});

function getFeatureFlags() {
  return {
    ...(window.APP_SETTINGS?.feature_flags ?? {}),
    // could be used to explicitly set flags for testing, i.e. [FF_DEV_3793]: true
  };
}

export function isFF(id: string) {
  const featureFlags = getFeatureFlags();

  // TODO: remove the override + if statement once LSE and LSO start building react the same way and fflag_fix_front_lsdv_4620_memory_leaks_100723_short is removed
  const override: Record<string, boolean> = {
    fflag_fix_front_lsdv_4620_memory_leaks_100723_short: false,
  };
  if (id in override) {
    return override[id];
  }
  if (id in featureFlags) {
    return featureFlags[id] === true;
  }
  return window.APP_SETTINGS?.feature_flags_default_value === true;
}

Object.assign(window, { getFeatureFlags, isFF });
