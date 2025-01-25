import { Suspense, ComponentType } from 'react';
import Spinner from '@/components/ui-components/spinner';

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    <Suspense
      fallback={
        <div className="w-full flex justify-center items-center">
          <Spinner color="fill-blue-600" size={60} />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
