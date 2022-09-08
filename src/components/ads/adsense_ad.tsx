import React from 'react'
import AdSense from 'react-adsense'

type AdBlockProps = {
  client: string;
  slot: string;
};

const AdBlock: React.FunctionComponent<AdBlockProps> = ({client, slot}) => (
  <AdSense.Google
    client={client}
    slot={slot}
    style={{ display: 'block' }}
    layout="in-article"
    format="fluid"
  />
)

export default AdBlock