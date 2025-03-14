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
 * @interface TransitConfigureCacheRequest
 */
export interface TransitConfigureCacheRequest {
  /**
   * Size of cache, use 0 for an unlimited cache size, defaults to 0
   * @type {number}
   * @memberof TransitConfigureCacheRequest
   */
  size?: number;
}

/**
 * Check if a given object implements the TransitConfigureCacheRequest interface.
 */
export function instanceOfTransitConfigureCacheRequest(value: object): value is TransitConfigureCacheRequest {
  return true;
}

export function TransitConfigureCacheRequestFromJSON(json: any): TransitConfigureCacheRequest {
  return TransitConfigureCacheRequestFromJSONTyped(json, false);
}

export function TransitConfigureCacheRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TransitConfigureCacheRequest {
  if (json == null) {
    return json;
  }
  return {
    size: json['size'] == null ? undefined : json['size'],
  };
}

export function TransitConfigureCacheRequestToJSON(json: any): TransitConfigureCacheRequest {
  return TransitConfigureCacheRequestToJSONTyped(json, false);
}

export function TransitConfigureCacheRequestToJSONTyped(
  value?: TransitConfigureCacheRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    size: value['size'],
  };
}
