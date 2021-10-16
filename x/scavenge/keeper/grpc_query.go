package keeper

import (
	"github.com/epappas/sportchain/x/scavenge/types"
)

var _ types.QueryServer = Keeper{}
