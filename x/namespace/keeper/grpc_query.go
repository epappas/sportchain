package keeper

import (
	"github.com/epappas/sportchain/x/namespace/types"
)

var _ types.QueryServer = Keeper{}
