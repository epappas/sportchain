package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/epappas/sportchain/x/sportchain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Posts(goCtx context.Context, req *types.QueryPostsRequest) (*types.QueryPostsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	var posts []*types.Post

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Get the key-value module store using the store key (in our case store key is "chain")
	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps posts (using post key, which is "Post-value-")
	postStore := prefix.NewStore(store, []byte(types.PostKey))
	// Paginate the posts store based on PageRequest
	pageRes, err := query.Paginate(postStore, req.Pagination, func(key []byte, value []byte) error {
		var post types.Post
		if err := k.cdc.Unmarshal(value, &post); err != nil {
			return err
		}
		posts = append(posts, &post)
		return nil
	})
	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	// Return a struct containing a list of posts and pagination info
	return &types.QueryPostsResponse{Post: posts, Pagination: pageRes}, nil
}
