
// This file now imports and re-exports from the new structure
import { 
  careers, 
  getCareersByIds,
  getAllCareers,
  getCareerById,
  getCareersByStream,
  getAvailableStreams
} from '@/data/careers';
import { Career } from '@/types/career';

export type { Career };
export { 
  careers, 
  getCareersByIds,
  getAllCareers,
  getCareerById,
  getCareersByStream,
  getAvailableStreams
};
