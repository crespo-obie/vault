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
 * @interface InternalUiReadAuthenticatedActiveCustomMessagesResponse
 */
export interface InternalUiReadAuthenticatedActiveCustomMessagesResponse {
  /**
   *
   * @type {object}
   * @memberof InternalUiReadAuthenticatedActiveCustomMessagesResponse
   */
  keyInfo?: object;
  /**
   *
   * @type {Array<string>}
   * @memberof InternalUiReadAuthenticatedActiveCustomMessagesResponse
   */
  keys?: Array<string>;
}

/**
 * Check if a given object implements the InternalUiReadAuthenticatedActiveCustomMessagesResponse interface.
 */
export function instanceOfInternalUiReadAuthenticatedActiveCustomMessagesResponse(
  value: object
): value is InternalUiReadAuthenticatedActiveCustomMessagesResponse {
  return true;
}

export function InternalUiReadAuthenticatedActiveCustomMessagesResponseFromJSON(
  json: any
): InternalUiReadAuthenticatedActiveCustomMessagesResponse {
  return InternalUiReadAuthenticatedActiveCustomMessagesResponseFromJSONTyped(json, false);
}

export function InternalUiReadAuthenticatedActiveCustomMessagesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InternalUiReadAuthenticatedActiveCustomMessagesResponse {
  if (json == null) {
    return json;
  }
  return {
    keyInfo: json['key_info'] == null ? undefined : json['key_info'],
    keys: json['keys'] == null ? undefined : json['keys'],
  };
}

export function InternalUiReadAuthenticatedActiveCustomMessagesResponseToJSON(
  json: any
): InternalUiReadAuthenticatedActiveCustomMessagesResponse {
  return InternalUiReadAuthenticatedActiveCustomMessagesResponseToJSONTyped(json, false);
}

export function InternalUiReadAuthenticatedActiveCustomMessagesResponseToJSONTyped(
  value?: InternalUiReadAuthenticatedActiveCustomMessagesResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    key_info: value['keyInfo'],
    keys: value['keys'],
  };
}
