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
 * @interface LeasesLookUpResponse
 */
export interface LeasesLookUpResponse {
  /**
   * A list of lease ids
   * @type {Array<string>}
   * @memberof LeasesLookUpResponse
   */
  keys?: Array<string>;
}

/**
 * Check if a given object implements the LeasesLookUpResponse interface.
 */
export function instanceOfLeasesLookUpResponse(value: object): value is LeasesLookUpResponse {
  return true;
}

export function LeasesLookUpResponseFromJSON(json: any): LeasesLookUpResponse {
  return LeasesLookUpResponseFromJSONTyped(json, false);
}

export function LeasesLookUpResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LeasesLookUpResponse {
  if (json == null) {
    return json;
  }
  return {
    keys: json['keys'] == null ? undefined : json['keys'],
  };
}

export function LeasesLookUpResponseToJSON(json: any): LeasesLookUpResponse {
  return LeasesLookUpResponseToJSONTyped(json, false);
}

export function LeasesLookUpResponseToJSONTyped(
  value?: LeasesLookUpResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    keys: value['keys'],
  };
}
