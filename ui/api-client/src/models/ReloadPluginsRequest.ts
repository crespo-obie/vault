/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface ReloadPluginsRequest
 */
export interface ReloadPluginsRequest {
  /**
   * The scope for the reload operation. May be empty or "global".
   * @type {string}
   * @memberof ReloadPluginsRequest
   */
  scope?: string;
}

/**
 * Check if a given object implements the ReloadPluginsRequest interface.
 */
export function instanceOfReloadPluginsRequest(value: object): value is ReloadPluginsRequest {
  return true;
}

export function ReloadPluginsRequestFromJSON(json: any): ReloadPluginsRequest {
  return ReloadPluginsRequestFromJSONTyped(json, false);
}

export function ReloadPluginsRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ReloadPluginsRequest {
  if (json == null) {
    return json;
  }
  return {
    scope: json['scope'] == null ? undefined : json['scope'],
  };
}

export function ReloadPluginsRequestToJSON(json: any): ReloadPluginsRequest {
  return ReloadPluginsRequestToJSONTyped(json, false);
}

export function ReloadPluginsRequestToJSONTyped(
  value?: ReloadPluginsRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    scope: value['scope'],
  };
}
