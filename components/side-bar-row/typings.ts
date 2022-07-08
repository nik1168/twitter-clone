import {SVGProps} from 'react';

export interface SideBarRowsProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => void;
}
