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
 * @interface AwsGenerateCredentialsWithParametersRequest
 */
export interface AwsGenerateCredentialsWithParametersRequest {
  /**
   * MFA code to provide for session tokens
   * @type {string}
   * @memberof AwsGenerateCredentialsWithParametersRequest
   */
  mfaCode?: string;
  /**
   * ARN of role to assume when credential_type is assumed_role
   * @type {string}
   * @memberof AwsGenerateCredentialsWithParametersRequest
   */
  roleArn?: string;
  /**
   * Session name to use when assuming role. Max chars: 64
   * @type {string}
   * @memberof AwsGenerateCredentialsWithParametersRequest
   */
  roleSessionName?: string;
  /**
   * Lifetime of the returned credentials in seconds
   * @type {string}
   * @memberof AwsGenerateCredentialsWithParametersRequest
   */
  ttl?: string;
}

/**
 * Check if a given object implements the AwsGenerateCredentialsWithParametersRequest interface.
 */
export function instanceOfAwsGenerateCredentialsWithParametersRequest(
  value: object
): value is AwsGenerateCredentialsWithParametersRequest {
  return true;
}

export function AwsGenerateCredentialsWithParametersRequestFromJSON(
  json: any
): AwsGenerateCredentialsWithParametersRequest {
  return AwsGenerateCredentialsWithParametersRequestFromJSONTyped(json, false);
}

export function AwsGenerateCredentialsWithParametersRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AwsGenerateCredentialsWithParametersRequest {
  if (json == null) {
    return json;
  }
  return {
    mfaCode: json['mfa_code'] == null ? undefined : json['mfa_code'],
    roleArn: json['role_arn'] == null ? undefined : json['role_arn'],
    roleSessionName: json['role_session_name'] == null ? undefined : json['role_session_name'],
    ttl: json['ttl'] == null ? undefined : json['ttl'],
  };
}

export function AwsGenerateCredentialsWithParametersRequestToJSON(
  json: any
): AwsGenerateCredentialsWithParametersRequest {
  return AwsGenerateCredentialsWithParametersRequestToJSONTyped(json, false);
}

export function AwsGenerateCredentialsWithParametersRequestToJSONTyped(
  value?: AwsGenerateCredentialsWithParametersRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    mfa_code: value['mfaCode'],
    role_arn: value['roleArn'],
    role_session_name: value['roleSessionName'],
    ttl: value['ttl'],
  };
}
