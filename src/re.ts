
/* IMPORT */

import {OS} from './types';

/* RE */

const Re = {

  order: ['windows', 'android', 'linux', 'ios', 'mac'] as OS[],

  linux: [
    /(hurd|linux)\s?([\w\.]*)/i,
    /(gnu)\s?([\w\.]*)/i,
    /(mint)[\/\s\(]?(\w*)/i,
    /(mageia|vectorlinux)[;\s]/i,
    /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
    /(cros)\s[\w]+\s([\w\.]+\w)/i,
    /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i
  ],

  mac: [
    /(mac\sos\sx)\s?([\w\s\.]*)/i,
    /(macintosh|mac(?=_powerpc)\s)/i
  ],

  windows: [
    /microsoft\s(windows)\s(vista|xp)/i,
    /(windows)\snt\s6\.2;\s(arm)/i,
    /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
    /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
    /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
  ],

  ios: [
    /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
    /cfnetwork\/.+darwin/i
  ],

  android: [
    /(android)[\/\s-]?([\w\.]*)/i
  ]

};

/* EXPORT */

export default Re;
