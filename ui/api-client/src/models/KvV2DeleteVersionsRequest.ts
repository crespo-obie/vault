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
 * @interface KvV2DeleteVersionsRequest
 */
export interface KvV2DeleteVersionsRequest {
  /**
   * The versions to be archived. The versioned data will not be deleted, but it will no longer be returned in normal get requests.
   * @type {Array<number>}
   * @memberof KvV2DeleteVersionsRequest
   */
  versions?: Array<number>;
}

/**
 * Check if a given object implements the KvV2DeleteVersionsRequest interface.
 */
export function instanceOfKvV2DeleteVersionsRequest(value: object): value is KvV2DeleteVersionsRequest {
  return true;
}

export function KvV2DeleteVersionsRequestFromJSON(json: any): KvV2DeleteVersionsRequest {
  return KvV2DeleteVersionsRequestFromJSONTyped(json, false);
}

export function KvV2DeleteVersionsRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): KvV2DeleteVersionsRequest {
  if (json == null) {
    return json;
  }
  return {
    versions: json['versions'] == null ? undefined : json['versions'],
  };
}

export function KvV2DeleteVersionsRequestToJSON(json: any): KvV2DeleteVersionsRequest {
  return KvV2DeleteVersionsRequestToJSONTyped(json, false);
}

export function KvV2DeleteVersionsRequestToJSONTyped(
  value?: KvV2DeleteVersionsRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    versions: value['versions'],
  };
}
