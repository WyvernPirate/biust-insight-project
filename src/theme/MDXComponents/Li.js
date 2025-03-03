import React from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
export default function MDXLi(props) {
  // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
  useBrokenLinks().collectAnchor(props.id);
  return <li {...props} />;
}
