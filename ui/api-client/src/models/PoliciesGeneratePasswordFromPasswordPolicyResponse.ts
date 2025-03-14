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
 * @interface PoliciesGeneratePasswordFromPasswordPolicyResponse
 */
export interface PoliciesGeneratePasswordFromPasswordPolicyResponse {
  /**
   *
   * @type {string}
   * @memberof PoliciesGeneratePasswordFromPasswordPolicyResponse
   */
  password?: string;
}

/**
 * Check if a given object implements the PoliciesGeneratePasswordFromPasswordPolicyResponse interface.
 */
export function instanceOfPoliciesGeneratePasswordFromPasswordPolicyResponse(
  value: object
): value is PoliciesGeneratePasswordFromPasswordPolicyResponse {
  return true;
}

export function PoliciesGeneratePasswordFromPasswordPolicyResponseFromJSON(
  json: any
): PoliciesGeneratePasswordFromPasswordPolicyResponse {
  return PoliciesGeneratePasswordFromPasswordPolicyResponseFromJSONTyped(json, false);
}

export function PoliciesGeneratePasswordFromPasswordPolicyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PoliciesGeneratePasswordFromPasswordPolicyResponse {
  if (json == null) {
    return json;
  }
  return {
    password: json['password'] == null ? undefined : json['password'],
  };
}

export function PoliciesGeneratePasswordFromPasswordPolicyResponseToJSON(
  json: any
): PoliciesGeneratePasswordFromPasswordPolicyResponse {
  return PoliciesGeneratePasswordFromPasswordPolicyResponseToJSONTyped(json, false);
}

export function PoliciesGeneratePasswordFromPasswordPolicyResponseToJSONTyped(
  value?: PoliciesGeneratePasswordFromPasswordPolicyResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    password: value['password'],
  };
}
