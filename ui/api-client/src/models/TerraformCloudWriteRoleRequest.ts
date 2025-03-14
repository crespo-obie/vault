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
 * @interface TerraformCloudWriteRoleRequest
 */
export interface TerraformCloudWriteRoleRequest {
  /**
   * Maximum time for role. If not set or set to 0, will use system default.
   * @type {string}
   * @memberof TerraformCloudWriteRoleRequest
   */
  maxTtl?: string;
  /**
   * Name of the Terraform Cloud or Enterprise organization
   * @type {string}
   * @memberof TerraformCloudWriteRoleRequest
   */
  organization?: string;
  /**
   * ID of the Terraform Cloud or Enterprise team under organization (e.g., settings/teams/team-xxxxxxxxxxxxx)
   * @type {string}
   * @memberof TerraformCloudWriteRoleRequest
   */
  teamId?: string;
  /**
   * Default lease for generated credentials. If not set or set to 0, will use system default.
   * @type {string}
   * @memberof TerraformCloudWriteRoleRequest
   */
  ttl?: string;
  /**
   * ID of the Terraform Cloud or Enterprise user (e.g., user-xxxxxxxxxxxxxxxx)
   * @type {string}
   * @memberof TerraformCloudWriteRoleRequest
   */
  userId?: string;
}

/**
 * Check if a given object implements the TerraformCloudWriteRoleRequest interface.
 */
export function instanceOfTerraformCloudWriteRoleRequest(
  value: object
): value is TerraformCloudWriteRoleRequest {
  return true;
}

export function TerraformCloudWriteRoleRequestFromJSON(json: any): TerraformCloudWriteRoleRequest {
  return TerraformCloudWriteRoleRequestFromJSONTyped(json, false);
}

export function TerraformCloudWriteRoleRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TerraformCloudWriteRoleRequest {
  if (json == null) {
    return json;
  }
  return {
    maxTtl: json['max_ttl'] == null ? undefined : json['max_ttl'],
    organization: json['organization'] == null ? undefined : json['organization'],
    teamId: json['team_id'] == null ? undefined : json['team_id'],
    ttl: json['ttl'] == null ? undefined : json['ttl'],
    userId: json['user_id'] == null ? undefined : json['user_id'],
  };
}

export function TerraformCloudWriteRoleRequestToJSON(json: any): TerraformCloudWriteRoleRequest {
  return TerraformCloudWriteRoleRequestToJSONTyped(json, false);
}

export function TerraformCloudWriteRoleRequestToJSONTyped(
  value?: TerraformCloudWriteRoleRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    max_ttl: value['maxTtl'],
    organization: value['organization'],
    team_id: value['teamId'],
    ttl: value['ttl'],
    user_id: value['userId'],
  };
}
