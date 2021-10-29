package keeper

import (
	"github.com/cryptodata/interchange/x/consuming/types"
)

var _ types.QueryServer = Keeper{}
