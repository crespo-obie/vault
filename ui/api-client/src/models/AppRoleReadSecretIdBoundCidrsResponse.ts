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
 * @interface AppRoleReadSecretIdBoundCidrsResponse
 */
export interface AppRoleReadSecretIdBoundCidrsResponse {
  /**
   * Comma separated string or list of CIDR blocks. If set, specifies the blocks of IP addresses which can perform the login operation.
   * @type {Array<string>}
   * @memberof AppRoleReadSecretIdBoundCidrsResponse
   */
  secretIdBoundCidrs?: Array<string>;
}

/**
 * Check if a given object implements the AppRoleReadSecretIdBoundCidrsResponse interface.
 */
export function instanceOfAppRoleReadSecretIdBoundCidrsResponse(
  value: object
): value is AppRoleReadSecretIdBoundCidrsResponse {
  return true;
}

export function AppRoleReadSecretIdBoundCidrsResponseFromJSON(
  json: any
): AppRoleReadSecretIdBoundCidrsResponse {
  return AppRoleReadSecretIdBoundCidrsResponseFromJSONTyped(json, false);
}

export function AppRoleReadSecretIdBoundCidrsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AppRoleReadSecretIdBoundCidrsResponse {
  if (json == null) {
    return json;
  }
  return {
    secretIdBoundCidrs: json['secret_id_bound_cidrs'] == null ? undefined : json['secret_id_bound_cidrs'],
  };
}

export function AppRoleReadSecretIdBoundCidrsResponseToJSON(
  json: any
): AppRoleReadSecretIdBoundCidrsResponse {
  return AppRoleReadSecretIdBoundCidrsResponseToJSONTyped(json, false);
}

export function AppRoleReadSecretIdBoundCidrsResponseToJSONTyped(
  value?: AppRoleReadSecretIdBoundCidrsResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    secret_id_bound_cidrs: value['secretIdBoundCidrs'],
  };
}
