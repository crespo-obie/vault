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
 * @interface PkiWriteIssuerRequest
 */
export interface PkiWriteIssuerRequest {
  /**
   * Comma-separated list of URLs to be used for the CRL distribution points attribute. See also RFC 5280 Section 4.2.1.13.
   * @type {Array<string>}
   * @memberof PkiWriteIssuerRequest
   */
  crlDistributionPoints?: Array<string>;
  /**
   * Whether critical extension checks should be performed when issuing certificates. (Enterprise only)
   * @type {boolean}
   * @memberof PkiWriteIssuerRequest
   */
  disableCriticalExtensionChecks?: boolean;
  /**
   * Whether the issuer name check should be performed when issuing certificates. (Enterprise only)
   * @type {boolean}
   * @memberof PkiWriteIssuerRequest
   */
  disableNameChecks?: boolean;
  /**
   * Whether name contraint checks shoul be performed when issuing certificates. (Enterprise only)
   * @type {boolean}
   * @memberof PkiWriteIssuerRequest
   */
  disableNameConstraintChecks?: boolean;
  /**
   * Whether max path length checks should be performed when issuing certificates. (Enterprise only)
   * @type {boolean}
   * @memberof PkiWriteIssuerRequest
   */
  disablePathLengthChecks?: boolean;
  /**
   * Whether or not to enabling templating of the above AIA fields. When templating is enabled the special values '{{issuer_id}}', '{{cluster_path}}', '{{cluster_aia_path}}' are available, but the addresses are not checked for URL validity until issuance time. Using '{{cluster_path}}' requires /config/cluster's 'path' member to be set on all PR Secondary clusters and using '{{cluster_aia_path}}' requires /config/cluster's 'aia_path' member to be set on all PR secondary clusters.
   * @type {boolean}
   * @memberof PkiWriteIssuerRequest
   */
  enableAiaUrlTemplating?: boolean;
  /**
   * Provide a name to the generated or existing issuer, the name must be unique across all issuers and not be the reserved value 'default'
   * @type {string}
   * @memberof PkiWriteIssuerRequest
   */
  issuerName?: string;
  /**
   * Comma-separated list of URLs to be used for the issuing certificate attribute. See also RFC 5280 Section 4.2.2.1.
   * @type {Array<string>}
   * @memberof PkiWriteIssuerRequest
   */
  issuingCertificates?: Array<string>;
  /**
   * Behavior of leaf's NotAfter fields: "err" to error if the computed NotAfter date exceeds that of this issuer; "truncate" to silently truncate to that of this issuer; or "permit" to allow this issuance to succeed (with NotAfter exceeding that of an issuer). Note that not all values will results in certificates that can be validated through the entire validity period. It is suggested to use "truncate" for intermediate CAs and "permit" only for root CAs.
   * @type {string}
   * @memberof PkiWriteIssuerRequest
   */
  leafNotAfterBehavior?: string;
  /**
   * Chain of issuer references to use to build this issuer's computed CAChain field, when non-empty.
   * @type {Array<string>}
   * @memberof PkiWriteIssuerRequest
   */
  manualChain?: Array<string>;
  /**
   * Comma-separated list of URLs to be used for the OCSP servers attribute. See also RFC 5280 Section 4.2.2.1.
   * @type {Array<string>}
   * @memberof PkiWriteIssuerRequest
   */
  ocspServers?: Array<string>;
  /**
   * Which x509.SignatureAlgorithm name to use for signing CRLs. This parameter allows differentiation between PKCS#1v1.5 and PSS keys and choice of signature hash algorithm. The default (empty string) value is for Go to select the signature algorithm. This can fail if the underlying key does not support the requested signature algorithm, which may not be known at modification time (such as with PKCS#11 managed RSA keys).
   * @type {string}
   * @memberof PkiWriteIssuerRequest
   */
  revocationSignatureAlgorithm?: string;
  /**
   * Comma-separated list (or string slice) of usages for this issuer; valid values are "read-only", "issuing-certificates", "crl-signing", and "ocsp-signing". Multiple values may be specified. Read-only is implicit and always set.
   * @type {Array<string>}
   * @memberof PkiWriteIssuerRequest
   */
  usage?: Array<string>;
}

/**
 * Check if a given object implements the PkiWriteIssuerRequest interface.
 */
export function instanceOfPkiWriteIssuerRequest(value: object): value is PkiWriteIssuerRequest {
  return true;
}

export function PkiWriteIssuerRequestFromJSON(json: any): PkiWriteIssuerRequest {
  return PkiWriteIssuerRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteIssuerRequest {
  if (json == null) {
    return json;
  }
  return {
    crlDistributionPoints:
      json['crl_distribution_points'] == null ? undefined : json['crl_distribution_points'],
    disableCriticalExtensionChecks:
      json['disable_critical_extension_checks'] == null
        ? undefined
        : json['disable_critical_extension_checks'],
    disableNameChecks: json['disable_name_checks'] == null ? undefined : json['disable_name_checks'],
    disableNameConstraintChecks:
      json['disable_name_constraint_checks'] == null ? undefined : json['disable_name_constraint_checks'],
    disablePathLengthChecks:
      json['disable_path_length_checks'] == null ? undefined : json['disable_path_length_checks'],
    enableAiaUrlTemplating:
      json['enable_aia_url_templating'] == null ? undefined : json['enable_aia_url_templating'],
    issuerName: json['issuer_name'] == null ? undefined : json['issuer_name'],
    issuingCertificates: json['issuing_certificates'] == null ? undefined : json['issuing_certificates'],
    leafNotAfterBehavior:
      json['leaf_not_after_behavior'] == null ? undefined : json['leaf_not_after_behavior'],
    manualChain: json['manual_chain'] == null ? undefined : json['manual_chain'],
    ocspServers: json['ocsp_servers'] == null ? undefined : json['ocsp_servers'],
    revocationSignatureAlgorithm:
      json['revocation_signature_algorithm'] == null ? undefined : json['revocation_signature_algorithm'],
    usage: json['usage'] == null ? undefined : json['usage'],
  };
}

export function PkiWriteIssuerRequestToJSON(json: any): PkiWriteIssuerRequest {
  return PkiWriteIssuerRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerRequestToJSONTyped(
  value?: PkiWriteIssuerRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    crl_distribution_points: value['crlDistributionPoints'],
    disable_critical_extension_checks: value['disableCriticalExtensionChecks'],
    disable_name_checks: value['disableNameChecks'],
    disable_name_constraint_checks: value['disableNameConstraintChecks'],
    disable_path_length_checks: value['disablePathLengthChecks'],
    enable_aia_url_templating: value['enableAiaUrlTemplating'],
    issuer_name: value['issuerName'],
    issuing_certificates: value['issuingCertificates'],
    leaf_not_after_behavior: value['leafNotAfterBehavior'],
    manual_chain: value['manualChain'],
    ocsp_servers: value['ocspServers'],
    revocation_signature_algorithm: value['revocationSignatureAlgorithm'],
    usage: value['usage'],
  };
}
