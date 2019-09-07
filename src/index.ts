
/* IMPORT */

import {OS} from './types';
import Re from './re';

/* UA2OS */

function ua2os ( ua: string ): OS | undefined {

  if ( typeof ua !== 'string' ) return undefined;

  return Re.order.find ( os => Re[os].find ( re => re.test ( ua ) ) );

}

/* EXPORT */

export default ua2os;
