package keeper

import (
	"github.com/cryptodata/interchange/x/interdex/types"
)

var _ types.QueryServer = Keeper{}
