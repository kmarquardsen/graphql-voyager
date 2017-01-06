import { store } from '../redux';
import * as _ from 'lodash';

export const CHANGE_INTROSPECTION = "CHANGE_INTROSPECTION";
export function changeIntrospection(introspection) {
  return {
    type: CHANGE_INTROSPECTION,
    payload: introspection,
  };
}

export function changeIntrospectionToPreset(presetName: string) {
  var introspection = store.getState().introspectionPresets[presetName];

  if (_.isUndefined(introspection))
    throw Error('Invalid preset name: ' + presetName);

  return {
    type: CHANGE_INTROSPECTION,
    payload: introspection,
  }
}

export const CHANGE_DISPLAY_OPTIONS = "CHANGE_DISPLAY_OPTIONS";
export function changeDisplayOptions(options) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: options,
  };
}

export function changeSortByAlphabet(state) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: {sortByAlphabet: state},
  };
}

export function changeSkipRelay(state) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: {skipRelay: state},
  };
}

export const RENDERING_SVG_FINISHED = "RENDERING_SVG_FINISHED";
export const SWITCH_CURRENT_SVG = "SWITCH_CURRENT_SVG";
export const SELECT_NODE = "SELECT_NODE";

export const PANEL_CHANGE_INTROSPECTION_LOAD_VISIBILITY =
  "PANEL_CHANGE_INTROSPECTION_LOAD_VISIBILITY";

export function panelChangeIntrospectionLoadVisibility(state) {
  return {
    type: PANEL_CHANGE_INTROSPECTION_LOAD_VISIBILITY,
    payload: state
  };
}