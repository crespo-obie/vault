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
 * @interface UserpassUpdatePoliciesRequest
 */
export interface UserpassUpdatePoliciesRequest {
  /**
   * Use "token_policies" instead. If this and "token_policies" are both specified, only "token_policies" will be used.
   * @type {Array<string>}
   * @memberof UserpassUpdatePoliciesRequest
   * @deprecated
   */
  policies?: Array<string>;
  /**
   * Comma-separated list of policies
   * @type {Array<string>}
   * @memberof UserpassUpdatePoliciesRequest
   */
  tokenPolicies?: Array<string>;
}

/**
 * Check if a given object implements the UserpassUpdatePoliciesRequest interface.
 */
export function instanceOfUserpassUpdatePoliciesRequest(
  value: object
): value is UserpassUpdatePoliciesRequest {
  return true;
}

export function UserpassUpdatePoliciesRequestFromJSON(json: any): UserpassUpdatePoliciesRequest {
  return UserpassUpdatePoliciesRequestFromJSONTyped(json, false);
}

export function UserpassUpdatePoliciesRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UserpassUpdatePoliciesRequest {
  if (json == null) {
    return json;
  }
  return {
    policies: json['policies'] == null ? undefined : json['policies'],
    tokenPolicies: json['token_policies'] == null ? undefined : json['token_policies'],
  };
}

export function UserpassUpdatePoliciesRequestToJSON(json: any): UserpassUpdatePoliciesRequest {
  return UserpassUpdatePoliciesRequestToJSONTyped(json, false);
}

export function UserpassUpdatePoliciesRequestToJSONTyped(
  value?: UserpassUpdatePoliciesRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    policies: value['policies'],
    token_policies: value['tokenPolicies'],
  };
}
