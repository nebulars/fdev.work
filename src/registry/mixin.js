// Use Map State
import { mapState } from 'vuex';

// Computed Stores
const storeMapping = mapState({
  // Constant Store
  state: state => state,
  // App Store
  app: ({ app }) => app,
});

// Export
export default {
  computed: {
    ...storeMapping,
  },
};
