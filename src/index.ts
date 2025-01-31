
/* IMPORT */

import Re from './re';
import type {OS} from './types';

/* MAIN */

const ua2os = ( ua: string ): OS | undefined => {

  return Re.order.find ( os => Re[os].find ( re => re.test ( ua ) ) );

};

/* EXPORT */

export default ua2os;
export type {OS};
