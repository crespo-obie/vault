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
 * @interface TransitGenerateRandomWithBytesRequest
 */
export interface TransitGenerateRandomWithBytesRequest {
  /**
   * The number of bytes to generate (POST body parameter). Defaults to 32 (256 bits).
   * @type {number}
   * @memberof TransitGenerateRandomWithBytesRequest
   */
  bytes?: number;
  /**
   * Encoding format to use. Can be "hex" or "base64". Defaults to "base64".
   * @type {string}
   * @memberof TransitGenerateRandomWithBytesRequest
   */
  format?: string;
}

/**
 * Check if a given object implements the TransitGenerateRandomWithBytesRequest interface.
 */
export function instanceOfTransitGenerateRandomWithBytesRequest(
  value: object
): value is TransitGenerateRandomWithBytesRequest {
  return true;
}

export function TransitGenerateRandomWithBytesRequestFromJSON(
  json: any
): TransitGenerateRandomWithBytesRequest {
  return TransitGenerateRandomWithBytesRequestFromJSONTyped(json, false);
}

export function TransitGenerateRandomWithBytesRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TransitGenerateRandomWithBytesRequest {
  if (json == null) {
    return json;
  }
  return {
    bytes: json['bytes'] == null ? undefined : json['bytes'],
    format: json['format'] == null ? undefined : json['format'],
  };
}

export function TransitGenerateRandomWithBytesRequestToJSON(
  json: any
): TransitGenerateRandomWithBytesRequest {
  return TransitGenerateRandomWithBytesRequestToJSONTyped(json, false);
}

export function TransitGenerateRandomWithBytesRequestToJSONTyped(
  value?: TransitGenerateRandomWithBytesRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    bytes: value['bytes'],
    format: value['format'],
  };
}
