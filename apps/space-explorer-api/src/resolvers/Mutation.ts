import type * as gql from '@/graphql';
import type { Resolver } from '@/types';
import { injectLaunchesIntoTrips } from '@/utils';

export const Mutation: MutationResolvers = {
  bookTrips: async (_, args, { dataSources }) => {
    const { launchIds } = args;

    const bookedTrips = await dataSources.userAPI.bookTrips(launchIds);
    const launches = await dataSources.spaceXAPI.getLaunchesByIds(launchIds);

    const finalTrips = injectLaunchesIntoTrips(bookedTrips, launches);

    return finalTrips;
  },
  cancelTrip: async (_, args, { dataSources }) => {
    const { tripId } = args;

    await dataSources.userAPI.cancelTrip(tripId);

    return true;
  },
  login: async (_, args, { dataSources }) => {
    const userProfile = await dataSources.userAPI.findOrCreate(args.email);

    dataSources.userAPI.login(userProfile?.email ?? '');

    return userProfile;
  },
  logout: (_, __, { dataSources }) => {
    dataSources.userAPI.logout();

    return true;
  },
};

/* Types */
interface MutationResolvers {
  login: Resolver<gql.MutationLoginArgs>;
  logout: Resolver;
  bookTrips: Resolver<gql.MutationBookTripsArgs>;
  cancelTrip: Resolver<gql.MutationCancelTripArgs>;
}
