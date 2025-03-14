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
 * @interface PkiPatchRoleResponse
 */
export interface PkiPatchRoleResponse {
  /**
   * If set, clients can request certificates for any domain, regardless of allowed_domains restrictions. See the documentation for more information.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowAnyName?: boolean;
  /**
   * If set, clients can request certificates for the base domains themselves, e.g. "example.com" of domains listed in allowed_domains. This is a separate option as in some cases this can be considered a security threat. See the documentation for more information.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowBareDomains?: boolean;
  /**
   * If set, domains specified in allowed_domains can include shell-style glob patterns, e.g. "ftp*.example.com". See the documentation for more information.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowGlobDomains?: boolean;
  /**
   * If set, IP Subject Alternative Names are allowed. Any valid IP is accepted and No authorization checking is performed.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowIpSans?: boolean;
  /**
   * Whether to allow "localhost" and "localdomain" as a valid common name in a request, independent of allowed_domains value.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowLocalhost?: boolean;
  /**
   * If set, clients can request certificates for subdomains of domains listed in allowed_domains, including wildcard subdomains. See the documentation for more information.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowSubdomains?: boolean;
  /**
   * Whether to allow "localhost" and "localdomain" as a valid common name in a request, independent of allowed_domains value.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowTokenDisplayname?: boolean;
  /**
   * If set, allows certificates with wildcards in the common name to be issued, conforming to RFC 6125's Section 6.4.3; e.g., "*.example.net" or "b*z.example.net". See the documentation for more information.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowWildcardCertificates?: boolean;
  /**
   * Specifies the domains this role is allowed to issue certificates for. This is used with the allow_bare_domains, allow_subdomains, and allow_glob_domains to determine matches for the common name, DNS-typed SAN entries, and Email-typed SAN entries of certificates. See the documentation for more information. This parameter accepts a comma-separated string or list of domains.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  allowedDomains?: Array<string>;
  /**
   * If set, Allowed domains can be specified using identity template policies. Non-templated domains are also permitted.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowedDomainsTemplate?: boolean;
  /**
   * If set, an array of allowed other names to put in SANs. These values support globbing and must be in the format <oid>;<type>:<value>. Currently only "utf8" is a valid type. All values, including globbing values, must use this syntax, with the exception being a single "*" which allows any OID and any value (but type must still be utf8).
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  allowedOtherSans?: Array<string>;
  /**
   * If set, an array of allowed serial numbers to put in Subject. These values support globbing.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  allowedSerialNumbers?: Array<string>;
  /**
   * If set, an array of allowed URIs for URI Subject Alternative Names. Any valid URI is accepted, these values support globbing.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  allowedUriSans?: Array<string>;
  /**
   * If set, Allowed URI SANs can be specified using identity template policies. Non-templated URI SANs are also permitted.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  allowedUriSansTemplate?: boolean;
  /**
   * If set, an array of allowed user-ids to put in user system login name specified here: https://www.rfc-editor.org/rfc/rfc1274#section-9.3.1
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  allowedUserIds?: Array<string>;
  /**
   * Mark Basic Constraints valid when issuing non-CA certificates.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  basicConstraintsValidForNonCa?: boolean;
  /**
   * If set, certificates are flagged for client auth use. Defaults to true. See also RFC 5280 Section 4.2.1.12.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  clientFlag?: boolean;
  /**
   * List of allowed validations to run against the Common Name field. Values can include 'email' to validate the CN is a email address, 'hostname' to validate the CN is a valid hostname (potentially including wildcards). When multiple validations are specified, these take OR semantics (either email OR hostname are allowed). The special value 'disabled' allows disabling all CN name validations, allowing for arbitrary non-Hostname, non-Email address CNs.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  cnValidations?: Array<string>;
  /**
   * If set, certificates are flagged for code signing use. Defaults to false. See also RFC 5280 Section 4.2.1.12.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  codeSigningFlag?: boolean;
  /**
   * If set, Country will be set to this value in certificates issued by this role.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  country?: Array<string>;
  /**
   * If set, certificates are flagged for email protection use. Defaults to false. See also RFC 5280 Section 4.2.1.12.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  emailProtectionFlag?: boolean;
  /**
   * If set, only valid host names are allowed for CN and DNS SANs, and the host part of email addresses. Defaults to true.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  enforceHostnames?: boolean;
  /**
   * A comma-separated string or list of extended key usages. Valid values can be found at https://golang.org/pkg/crypto/x509/#ExtKeyUsage -- simply drop the "ExtKeyUsage" part of the name. To remove all key usages from being set, set this value to an empty list. See also RFC 5280 Section 4.2.1.12.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  extKeyUsage?: Array<string>;
  /**
   * A comma-separated string or list of extended key usage oids.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  extKeyUsageOids?: Array<string>;
  /**
   * If set, certificates issued/signed against this role will have Vault leases attached to them. Defaults to "false". Certificates can be added to the CRL by "vault revoke <lease_id>" when certificates are associated with leases. It can also be done using the "pki/revoke" endpoint. However, when lease generation is disabled, invoking "pki/revoke" would be the only way to add the certificates to the CRL. When large number of certificates are generated with long lifetimes, it is recommended that lease generation be disabled, as large amount of leases adversely affect the startup time of Vault.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  generateLease?: boolean;
  /**
   * Reference to the issuer used to sign requests serviced by this role.
   * @type {string}
   * @memberof PkiPatchRoleResponse
   */
  issuerRef?: string;
  /**
   * The number of bits to use. Allowed values are 0 (universal default); with rsa key_type: 2048 (default), 3072, or 4096; with ec key_type: 224, 256 (default), 384, or 521; ignored with ed25519.
   * @type {number}
   * @memberof PkiPatchRoleResponse
   */
  keyBits?: number;
  /**
   * The type of key to use; defaults to RSA. "rsa" "ec", "ed25519" and "any" are the only valid values.
   * @type {string}
   * @memberof PkiPatchRoleResponse
   */
  keyType?: string;
  /**
   * A comma-separated string or list of key usages (not extended key usages). Valid values can be found at https://golang.org/pkg/crypto/x509/#KeyUsage -- simply drop the "KeyUsage" part of the name. To remove all key usages from being set, set this value to an empty list. See also RFC 5280 Section 4.2.1.3.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  keyUsage?: Array<string>;
  /**
   * If set, Locality will be set to this value in certificates issued by this role.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  locality?: Array<string>;
  /**
   * The maximum allowed lease duration. If not set, defaults to the system maximum lease TTL.
   * @type {number}
   * @memberof PkiPatchRoleResponse
   */
  maxTtl?: number;
  /**
   * If set, certificates issued/signed against this role will not be stored in the storage backend. This can improve performance when issuing large numbers of certificates. However, certificates issued in this way cannot be enumerated or revoked, so this option is recommended only for certificates that are non-sensitive, or extremely short-lived. This option implies a value of "false" for "generate_lease".
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  noStore?: boolean;
  /**
   * If set, if a client attempts to issue or sign a certificate with attached cert_metadata to store, the issuance / signing instead fails.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  noStoreMetadata?: boolean;
  /**
   * Set the not after field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ.
   * @type {string}
   * @memberof PkiPatchRoleResponse
   */
  notAfter?: string;
  /**
   * The duration in seconds before now which the certificate needs to be backdated by.
   * @type {number}
   * @memberof PkiPatchRoleResponse
   */
  notBeforeDuration?: number;
  /**
   * If set, O (Organization) will be set to this value in certificates issued by this role.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  organization?: Array<string>;
  /**
   * If set, OU (OrganizationalUnit) will be set to this value in certificates issued by this role.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  ou?: Array<string>;
  /**
   * A comma-separated string or list of policy OIDs, or a JSON list of qualified policy information, which must include an oid, and may include a notice and/or cps url, using the form [{"oid"="1.3.6.1.4.1.7.8","notice"="I am a user Notice"}, {"oid"="1.3.6.1.4.1.44947.1.2.4 ","cps"="https://example.com"}].
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  policyIdentifiers?: Array<string>;
  /**
   * If set, Postal Code will be set to this value in certificates issued by this role.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  postalCode?: Array<string>;
  /**
   * If set, Province will be set to this value in certificates issued by this role.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  province?: Array<string>;
  /**
   * If set to false, makes the 'common_name' field optional while generating a certificate.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  requireCn?: boolean;
  /**
   * Source for the certificate subject serial number. If "json-csr" (default), the value from the JSON serial_number field is used, falling back to the value in the CSR if empty. If "json", the value from the serial_number JSON field is used, ignoring the value in the CSR.
   * @type {string}
   * @memberof PkiPatchRoleResponse
   */
  serialNumberSource?: string;
  /**
   * If set, certificates are flagged for server auth use. Defaults to true. See also RFC 5280 Section 4.2.1.12.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  serverFlag?: boolean;
  /**
   * The number of bits to use in the signature algorithm; accepts 256 for SHA-2-256, 384 for SHA-2-384, and 512 for SHA-2-512. Defaults to 0 to automatically detect based on key length (SHA-2-256 for RSA keys, and matching the curve size for NIST P-Curves).
   * @type {number}
   * @memberof PkiPatchRoleResponse
   */
  signatureBits?: number;
  /**
   * If set, Street Address will be set to this value in certificates issued by this role.
   * @type {Array<string>}
   * @memberof PkiPatchRoleResponse
   */
  streetAddress?: Array<string>;
  /**
   * The lease duration (validity period of the certificate) if no specific lease duration is requested. The lease duration controls the expiration of certificates issued by this backend. Defaults to the system default value or the value of max_ttl, whichever is shorter.
   * @type {number}
   * @memberof PkiPatchRoleResponse
   */
  ttl?: number;
  /**
   * If set, when used with a signing profile, the common name in the CSR will be used. This does *not* include any requested Subject Alternative Names; use use_csr_sans for that. Defaults to true.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  useCsrCommonName?: boolean;
  /**
   * If set, when used with a signing profile, the SANs in the CSR will be used. This does *not* include the Common Name (cn); use use_csr_common_name for that. Defaults to true.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  useCsrSans?: boolean;
  /**
   * Whether or not to use PSS signatures when using a RSA key-type issuer. Defaults to false.
   * @type {boolean}
   * @memberof PkiPatchRoleResponse
   */
  usePss?: boolean;
}

/**
 * Check if a given object implements the PkiPatchRoleResponse interface.
 */
export function instanceOfPkiPatchRoleResponse(value: object): value is PkiPatchRoleResponse {
  return true;
}

export function PkiPatchRoleResponseFromJSON(json: any): PkiPatchRoleResponse {
  return PkiPatchRoleResponseFromJSONTyped(json, false);
}

export function PkiPatchRoleResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiPatchRoleResponse {
  if (json == null) {
    return json;
  }
  return {
    allowAnyName: json['allow_any_name'] == null ? undefined : json['allow_any_name'],
    allowBareDomains: json['allow_bare_domains'] == null ? undefined : json['allow_bare_domains'],
    allowGlobDomains: json['allow_glob_domains'] == null ? undefined : json['allow_glob_domains'],
    allowIpSans: json['allow_ip_sans'] == null ? undefined : json['allow_ip_sans'],
    allowLocalhost: json['allow_localhost'] == null ? undefined : json['allow_localhost'],
    allowSubdomains: json['allow_subdomains'] == null ? undefined : json['allow_subdomains'],
    allowTokenDisplayname:
      json['allow_token_displayname'] == null ? undefined : json['allow_token_displayname'],
    allowWildcardCertificates:
      json['allow_wildcard_certificates'] == null ? undefined : json['allow_wildcard_certificates'],
    allowedDomains: json['allowed_domains'] == null ? undefined : json['allowed_domains'],
    allowedDomainsTemplate:
      json['allowed_domains_template'] == null ? undefined : json['allowed_domains_template'],
    allowedOtherSans: json['allowed_other_sans'] == null ? undefined : json['allowed_other_sans'],
    allowedSerialNumbers: json['allowed_serial_numbers'] == null ? undefined : json['allowed_serial_numbers'],
    allowedUriSans: json['allowed_uri_sans'] == null ? undefined : json['allowed_uri_sans'],
    allowedUriSansTemplate:
      json['allowed_uri_sans_template'] == null ? undefined : json['allowed_uri_sans_template'],
    allowedUserIds: json['allowed_user_ids'] == null ? undefined : json['allowed_user_ids'],
    basicConstraintsValidForNonCa:
      json['basic_constraints_valid_for_non_ca'] == null
        ? undefined
        : json['basic_constraints_valid_for_non_ca'],
    clientFlag: json['client_flag'] == null ? undefined : json['client_flag'],
    cnValidations: json['cn_validations'] == null ? undefined : json['cn_validations'],
    codeSigningFlag: json['code_signing_flag'] == null ? undefined : json['code_signing_flag'],
    country: json['country'] == null ? undefined : json['country'],
    emailProtectionFlag: json['email_protection_flag'] == null ? undefined : json['email_protection_flag'],
    enforceHostnames: json['enforce_hostnames'] == null ? undefined : json['enforce_hostnames'],
    extKeyUsage: json['ext_key_usage'] == null ? undefined : json['ext_key_usage'],
    extKeyUsageOids: json['ext_key_usage_oids'] == null ? undefined : json['ext_key_usage_oids'],
    generateLease: json['generate_lease'] == null ? undefined : json['generate_lease'],
    issuerRef: json['issuer_ref'] == null ? undefined : json['issuer_ref'],
    keyBits: json['key_bits'] == null ? undefined : json['key_bits'],
    keyType: json['key_type'] == null ? undefined : json['key_type'],
    keyUsage: json['key_usage'] == null ? undefined : json['key_usage'],
    locality: json['locality'] == null ? undefined : json['locality'],
    maxTtl: json['max_ttl'] == null ? undefined : json['max_ttl'],
    noStore: json['no_store'] == null ? undefined : json['no_store'],
    noStoreMetadata: json['no_store_metadata'] == null ? undefined : json['no_store_metadata'],
    notAfter: json['not_after'] == null ? undefined : json['not_after'],
    notBeforeDuration: json['not_before_duration'] == null ? undefined : json['not_before_duration'],
    organization: json['organization'] == null ? undefined : json['organization'],
    ou: json['ou'] == null ? undefined : json['ou'],
    policyIdentifiers: json['policy_identifiers'] == null ? undefined : json['policy_identifiers'],
    postalCode: json['postal_code'] == null ? undefined : json['postal_code'],
    province: json['province'] == null ? undefined : json['province'],
    requireCn: json['require_cn'] == null ? undefined : json['require_cn'],
    serialNumberSource: json['serial_number_source'] == null ? undefined : json['serial_number_source'],
    serverFlag: json['server_flag'] == null ? undefined : json['server_flag'],
    signatureBits: json['signature_bits'] == null ? undefined : json['signature_bits'],
    streetAddress: json['street_address'] == null ? undefined : json['street_address'],
    ttl: json['ttl'] == null ? undefined : json['ttl'],
    useCsrCommonName: json['use_csr_common_name'] == null ? undefined : json['use_csr_common_name'],
    useCsrSans: json['use_csr_sans'] == null ? undefined : json['use_csr_sans'],
    usePss: json['use_pss'] == null ? undefined : json['use_pss'],
  };
}

export function PkiPatchRoleResponseToJSON(json: any): PkiPatchRoleResponse {
  return PkiPatchRoleResponseToJSONTyped(json, false);
}

export function PkiPatchRoleResponseToJSONTyped(
  value?: PkiPatchRoleResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    allow_any_name: value['allowAnyName'],
    allow_bare_domains: value['allowBareDomains'],
    allow_glob_domains: value['allowGlobDomains'],
    allow_ip_sans: value['allowIpSans'],
    allow_localhost: value['allowLocalhost'],
    allow_subdomains: value['allowSubdomains'],
    allow_token_displayname: value['allowTokenDisplayname'],
    allow_wildcard_certificates: value['allowWildcardCertificates'],
    allowed_domains: value['allowedDomains'],
    allowed_domains_template: value['allowedDomainsTemplate'],
    allowed_other_sans: value['allowedOtherSans'],
    allowed_serial_numbers: value['allowedSerialNumbers'],
    allowed_uri_sans: value['allowedUriSans'],
    allowed_uri_sans_template: value['allowedUriSansTemplate'],
    allowed_user_ids: value['allowedUserIds'],
    basic_constraints_valid_for_non_ca: value['basicConstraintsValidForNonCa'],
    client_flag: value['clientFlag'],
    cn_validations: value['cnValidations'],
    code_signing_flag: value['codeSigningFlag'],
    country: value['country'],
    email_protection_flag: value['emailProtectionFlag'],
    enforce_hostnames: value['enforceHostnames'],
    ext_key_usage: value['extKeyUsage'],
    ext_key_usage_oids: value['extKeyUsageOids'],
    generate_lease: value['generateLease'],
    issuer_ref: value['issuerRef'],
    key_bits: value['keyBits'],
    key_type: value['keyType'],
    key_usage: value['keyUsage'],
    locality: value['locality'],
    max_ttl: value['maxTtl'],
    no_store: value['noStore'],
    no_store_metadata: value['noStoreMetadata'],
    not_after: value['notAfter'],
    not_before_duration: value['notBeforeDuration'],
    organization: value['organization'],
    ou: value['ou'],
    policy_identifiers: value['policyIdentifiers'],
    postal_code: value['postalCode'],
    province: value['province'],
    require_cn: value['requireCn'],
    serial_number_source: value['serialNumberSource'],
    server_flag: value['serverFlag'],
    signature_bits: value['signatureBits'],
    street_address: value['streetAddress'],
    ttl: value['ttl'],
    use_csr_common_name: value['useCsrCommonName'],
    use_csr_sans: value['useCsrSans'],
    use_pss: value['usePss'],
  };
}
