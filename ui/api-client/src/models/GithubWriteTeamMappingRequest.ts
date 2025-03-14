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
 * @interface GithubWriteTeamMappingRequest
 */
export interface GithubWriteTeamMappingRequest {
  /**
   * Value for teams mapping
   * @type {string}
   * @memberof GithubWriteTeamMappingRequest
   */
  value?: string;
}

/**
 * Check if a given object implements the GithubWriteTeamMappingRequest interface.
 */
export function instanceOfGithubWriteTeamMappingRequest(
  value: object
): value is GithubWriteTeamMappingRequest {
  return true;
}

export function GithubWriteTeamMappingRequestFromJSON(json: any): GithubWriteTeamMappingRequest {
  return GithubWriteTeamMappingRequestFromJSONTyped(json, false);
}

export function GithubWriteTeamMappingRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GithubWriteTeamMappingRequest {
  if (json == null) {
    return json;
  }
  return {
    value: json['value'] == null ? undefined : json['value'],
  };
}

export function GithubWriteTeamMappingRequestToJSON(json: any): GithubWriteTeamMappingRequest {
  return GithubWriteTeamMappingRequestToJSONTyped(json, false);
}

export function GithubWriteTeamMappingRequestToJSONTyped(
  value?: GithubWriteTeamMappingRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    value: value['value'],
  };
}
