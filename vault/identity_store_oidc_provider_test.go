package vault

import (
	"testing"

	"github.com/go-test/deep"
	"github.com/hashicorp/vault/helper/namespace"
	"github.com/hashicorp/vault/sdk/logical"
)

// TestOIDC_Path_OIDCProviderAssignment tests CRUD operations for assignments
func TestOIDC_Path_OIDCProviderAssignment(t *testing.T) {
	c, _, _ := TestCoreUnsealed(t)
	ctx := namespace.RootContext(nil)
	storage := &logical.InmemStorage{}

	// Create a test assignment "test-assignment" -- should succeed
	resp, err := c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.CreateOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)

	// Read "test-assignment" and validate
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)
	expected := map[string]interface{}{
		"groups":   []string{},
		"entities": []string{},
	}
	if diff := deep.Equal(expected, resp.Data); diff != nil {
		t.Fatal(diff)
	}

	// Update "test-assignment" -- should succeed
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.UpdateOperation,
		Data: map[string]interface{}{
			"groups":   "my-group",
			"entities": "my-entity",
		},
		Storage: storage,
	})
	expectSuccess(t, resp, err)

	// Read "test-assignment" again and validate
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)
	expected = map[string]interface{}{
		"groups":   []string{"my-group"},
		"entities": []string{"my-entity"},
	}
	if diff := deep.Equal(expected, resp.Data); diff != nil {
		t.Fatal(diff)
	}

	// Delete test-assignment -- should succeed
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.DeleteOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)

	// Read "test-assignment" again and validate
	resp, _ = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	if resp != nil {
		t.Fatalf("expected nil but got resp: %#v", resp)
	}
}

// TestOIDC_Path_OIDCProviderAssignment_Update tests Update operations for assignments
func TestOIDC_Path_OIDCProviderAssignment_Update(t *testing.T) {
	c, _, _ := TestCoreUnsealed(t)
	ctx := namespace.RootContext(nil)
	storage := &logical.InmemStorage{}

	// Create a test assignment "test-assignment" -- should succeed
	resp, err := c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.CreateOperation,
		Storage:   storage,
		Data: map[string]interface{}{
			"groups":   "my-group",
			"entities": "my-entity",
		},
	})
	expectSuccess(t, resp, err)

	// Read "test-assignment" and validate
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)
	expected := map[string]interface{}{
		"groups":   []string{"my-group"},
		"entities": []string{"my-entity"},
	}
	if diff := deep.Equal(expected, resp.Data); diff != nil {
		t.Fatal(diff)
	}

	// Update "test-assignment" -- should succeed
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.UpdateOperation,
		Data: map[string]interface{}{
			"groups": "my-group2",
		},
		Storage: storage,
	})
	expectSuccess(t, resp, err)

	// Read "test-assignment" again and validate
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)
	expected = map[string]interface{}{
		"groups":   []string{"my-group2"},
		"entities": []string{"my-entity"},
	}
	if diff := deep.Equal(expected, resp.Data); diff != nil {
		t.Fatal(diff)
	}
}

// TestOIDC_Path_OIDC_ProviderAssignmentList tests the List operation for assignments
func TestOIDC_Path_OIDC_ProviderAssignmentList(t *testing.T) {
	c, _, _ := TestCoreUnsealed(t)
	ctx := namespace.RootContext(nil)
	storage := &logical.InmemStorage{}

	// Prepare two assignments, test-assignment1 and test-assignment2
	c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment1",
		Operation: logical.CreateOperation,
		Storage:   storage,
	})

	c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment2",
		Operation: logical.CreateOperation,
		Storage:   storage,
	})

	// list assignments
	respListAssignments, listErr := c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment",
		Operation: logical.ListOperation,
		Storage:   storage,
	})
	expectSuccess(t, respListAssignments, listErr)

	// validate list response
	expectedStrings := map[string]interface{}{"test-assignment1": true, "test-assignment2": true}
	expectStrings(t, respListAssignments.Data["keys"].([]string), expectedStrings)

	// delete test-assignment2
	c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment/test-assignment2",
		Operation: logical.DeleteOperation,
		Storage:   storage,
	})

	// list assignments again and validate response
	respListAssignmentAfterDelete, listErrAfterDelete := c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/assignment",
		Operation: logical.ListOperation,
		Storage:   storage,
	})
	expectSuccess(t, respListAssignmentAfterDelete, listErrAfterDelete)

	// validate list response
	delete(expectedStrings, "test-assignment2")
	expectStrings(t, respListAssignmentAfterDelete.Data["keys"].([]string), expectedStrings)
}

// TestOIDC_Path_OIDCProvider tests CRUD operations for providers
func TestOIDC_Path_OIDCProvider(t *testing.T) {
	c, _, _ := TestCoreUnsealed(t)
	ctx := namespace.RootContext(nil)
	storage := &logical.InmemStorage{}

	// Create a test provider "test-provider" -- should succeed
	resp, err := c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.CreateOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)

	// Read "test-provider" and validate
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)
	expected := map[string]interface{}{
		"issuer":             "",
		"allowed_client_ids": []string{},
		"scopes":             []string{},
	}
	if diff := deep.Equal(expected, resp.Data); diff != nil {
		t.Fatal(diff)
	}

	// Update "test-provider" -- should succeed
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.UpdateOperation,
		Data: map[string]interface{}{
			"issuer":             "test-issuer",
			"allowed_client_ids": []string{"test-client-id"},
			"scopes":             []string{"test-scope"},
		},
		Storage: storage,
	})
	expectSuccess(t, resp, err)

	// Read "test-provider" again and validate
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)
	expected = map[string]interface{}{
		"issuer":             "test-issuer",
		"allowed_client_ids": []string{"test-client-id"},
		"scopes":             []string{"test-scope"},
	}
	if diff := deep.Equal(expected, resp.Data); diff != nil {
		t.Fatal(diff)
	}

	// Delete test-provider -- should succeed
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.DeleteOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)

	// Read "test-provider" again and validate
	resp, _ = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	if resp != nil {
		t.Fatalf("expected nil but got resp: %#v", resp)
	}
}

// TestOIDC_Path_OIDCProvider_Update tests Update operations for providers
func TestOIDC_Path_OIDCProvider_Update(t *testing.T) {
	c, _, _ := TestCoreUnsealed(t)
	ctx := namespace.RootContext(nil)
	storage := &logical.InmemStorage{}

	// Create a test provider "test-provider" -- should succeed
	resp, err := c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.CreateOperation,
		Storage:   storage,
		Data: map[string]interface{}{
			"issuer":             "test-issuer",
			"allowed_client_ids": []string{"test-client-id"},
			"scopes":             []string{"test-scope"},
		},
	})
	expectSuccess(t, resp, err)

	// Read "test-provider" and validate
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)
	expected := map[string]interface{}{
		"issuer":             "test-issuer",
		"allowed_client_ids": []string{"test-client-id"},
		"scopes":             []string{"test-scope"},
	}
	if diff := deep.Equal(expected, resp.Data); diff != nil {
		t.Fatal(diff)
	}

	// Update "test-provider" -- should succeed
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.UpdateOperation,
		Data: map[string]interface{}{
			"issuer": "test-issuer-2",
		},
		Storage: storage,
	})
	expectSuccess(t, resp, err)

	// Read "test-provider" again and validate
	resp, err = c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider",
		Operation: logical.ReadOperation,
		Storage:   storage,
	})
	expectSuccess(t, resp, err)
	expected = map[string]interface{}{
		"issuer":             "test-issuer-2",
		"allowed_client_ids": []string{"test-client-id"},
		"scopes":             []string{"test-scope"},
	}
	if diff := deep.Equal(expected, resp.Data); diff != nil {
		t.Fatal(diff)
	}
}

// TestOIDC_Path_OIDC_ProviderList tests the List operation for providers
func TestOIDC_Path_OIDC_ProviderList(t *testing.T) {
	c, _, _ := TestCoreUnsealed(t)
	ctx := namespace.RootContext(nil)
	storage := &logical.InmemStorage{}

	// Prepare two providers, test-provider1 and test-provider2
	c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider1",
		Operation: logical.CreateOperation,
		Storage:   storage,
	})

	c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider2",
		Operation: logical.CreateOperation,
		Storage:   storage,
	})

	// list providers
	respListProviders, listErr := c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider",
		Operation: logical.ListOperation,
		Storage:   storage,
	})
	expectSuccess(t, respListProviders, listErr)

	// validate list response
	expectedStrings := map[string]interface{}{"test-provider1": true, "test-provider2": true}
	expectStrings(t, respListProviders.Data["keys"].([]string), expectedStrings)

	// delete test-provider2
	c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider/test-provider2",
		Operation: logical.DeleteOperation,
		Storage:   storage,
	})

	// list providers again and validate response
	respListProvidersAfterDelete, listErrAfterDelete := c.identityStore.HandleRequest(ctx, &logical.Request{
		Path:      "oidc/provider",
		Operation: logical.ListOperation,
		Storage:   storage,
	})
	expectSuccess(t, respListProvidersAfterDelete, listErrAfterDelete)

	// validate list response
	delete(expectedStrings, "test-provider2")
	expectStrings(t, respListProvidersAfterDelete.Data["keys"].([]string), expectedStrings)
}
