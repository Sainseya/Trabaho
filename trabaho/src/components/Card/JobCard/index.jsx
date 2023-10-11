import Card from './card';
import { jobDetails } from '../../../Data/datas';

const JobCard = () => {
   return (
      <div className="grid xl:grid-cols-4 md:grid-cols-1 gap-5 ml-auto ">
         {jobDetails.map((job) => (
            <Card key={job.id} job={job} />
         ))}
      </div>
   );
};

export default JobCard;
