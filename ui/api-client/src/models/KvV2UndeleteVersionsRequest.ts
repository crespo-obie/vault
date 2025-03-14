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
 * @interface KvV2UndeleteVersionsRequest
 */
export interface KvV2UndeleteVersionsRequest {
  /**
   * The versions to unarchive. The versions will be restored and their data will be returned on normal get requests.
   * @type {Array<number>}
   * @memberof KvV2UndeleteVersionsRequest
   */
  versions?: Array<number>;
}

/**
 * Check if a given object implements the KvV2UndeleteVersionsRequest interface.
 */
export function instanceOfKvV2UndeleteVersionsRequest(value: object): value is KvV2UndeleteVersionsRequest {
  return true;
}

export function KvV2UndeleteVersionsRequestFromJSON(json: any): KvV2UndeleteVersionsRequest {
  return KvV2UndeleteVersionsRequestFromJSONTyped(json, false);
}

export function KvV2UndeleteVersionsRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): KvV2UndeleteVersionsRequest {
  if (json == null) {
    return json;
  }
  return {
    versions: json['versions'] == null ? undefined : json['versions'],
  };
}

export function KvV2UndeleteVersionsRequestToJSON(json: any): KvV2UndeleteVersionsRequest {
  return KvV2UndeleteVersionsRequestToJSONTyped(json, false);
}

export function KvV2UndeleteVersionsRequestToJSONTyped(
  value?: KvV2UndeleteVersionsRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    versions: value['versions'],
  };
}
