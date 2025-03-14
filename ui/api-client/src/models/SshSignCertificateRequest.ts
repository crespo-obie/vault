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
 * @interface SshSignCertificateRequest
 */
export interface SshSignCertificateRequest {
  /**
   * Type of certificate to be created; either "user" or "host".
   * @type {string}
   * @memberof SshSignCertificateRequest
   */
  certType?: string;
  /**
   * Critical options that the certificate should be signed for.
   * @type {object}
   * @memberof SshSignCertificateRequest
   */
  criticalOptions?: object;
  /**
   * Extensions that the certificate should be signed for.
   * @type {object}
   * @memberof SshSignCertificateRequest
   */
  extensions?: object;
  /**
   * Key id that the created certificate should have. If not specified, the display name of the token will be used.
   * @type {string}
   * @memberof SshSignCertificateRequest
   */
  keyId?: string;
  /**
   * SSH public key that should be signed.
   * @type {string}
   * @memberof SshSignCertificateRequest
   */
  publicKey?: string;
  /**
   * The requested Time To Live for the SSH certificate; sets the expiration date. If not specified the role default, backend default, or system default TTL is used, in that order. Cannot be later than the role max TTL.
   * @type {string}
   * @memberof SshSignCertificateRequest
   */
  ttl?: string;
  /**
   * Valid principals, either usernames or hostnames, that the certificate should be signed for.
   * @type {string}
   * @memberof SshSignCertificateRequest
   */
  validPrincipals?: string;
}

/**
 * Check if a given object implements the SshSignCertificateRequest interface.
 */
export function instanceOfSshSignCertificateRequest(value: object): value is SshSignCertificateRequest {
  return true;
}

export function SshSignCertificateRequestFromJSON(json: any): SshSignCertificateRequest {
  return SshSignCertificateRequestFromJSONTyped(json, false);
}

export function SshSignCertificateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SshSignCertificateRequest {
  if (json == null) {
    return json;
  }
  return {
    certType: json['cert_type'] == null ? undefined : json['cert_type'],
    criticalOptions: json['critical_options'] == null ? undefined : json['critical_options'],
    extensions: json['extensions'] == null ? undefined : json['extensions'],
    keyId: json['key_id'] == null ? undefined : json['key_id'],
    publicKey: json['public_key'] == null ? undefined : json['public_key'],
    ttl: json['ttl'] == null ? undefined : json['ttl'],
    validPrincipals: json['valid_principals'] == null ? undefined : json['valid_principals'],
  };
}

export function SshSignCertificateRequestToJSON(json: any): SshSignCertificateRequest {
  return SshSignCertificateRequestToJSONTyped(json, false);
}

export function SshSignCertificateRequestToJSONTyped(
  value?: SshSignCertificateRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    cert_type: value['certType'],
    critical_options: value['criticalOptions'],
    extensions: value['extensions'],
    key_id: value['keyId'],
    public_key: value['publicKey'],
    ttl: value['ttl'],
    valid_principals: value['validPrincipals'],
  };
}
