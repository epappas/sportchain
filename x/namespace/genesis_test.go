package namespace_test

import (
	"testing"

	keepertest "github.com/epappas/sportchain/testutil/keeper"
	"github.com/epappas/sportchain/x/namespace"
	"github.com/epappas/sportchain/x/namespace/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NamespaceKeeper(t)
	namespace.InitGenesis(ctx, *k, genesisState)
	got := namespace.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
