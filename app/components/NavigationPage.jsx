
import {  BarChartOutlined,AlertOutlined,ToolOutlined,TrophyOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from '@remix-run/react';
const items = [
  {
key:"Anasayfa",
label:"KEAS PORTAL"
  },
  {
    type: "divider"
  },
  {
    key: 'sub1',
    label: 'Vardiya Raporu',
    icon: <ToolOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Gebze',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'MEP',
          },
          {
            key: '2',
            label: 'MDF',
          },
          {
            key: '3',
            label: 'YL',
          },
        ],
      },
      
    ],
  },
  {
    key: 'sub2',
    label: 'Kalite Uygulamaları',
    icon: <TrophyOutlined />,
    children: [
     
    
      {
        key: 'sub3',
        label: '5S',
        children: [
          {
            key: 'Puanlama',
            label: 'Puanlama',
          },
          {
            key: '8',
            label: '5S Bilgi Kitapçığı',
          },
        ],
      },
    ],
  },
  {
    key:'data',
    label:'Canlı Veri',
    icon: <BarChartOutlined />,
  },
  {
    type: 'divider',
  },
  
  
];
const NavigationPage = () => {
  const navigate=useNavigate();
  const onClick = (e) => {
    
    
    if(e.key==='Puanlama'){
      
      navigate("/kalite5s")
    }
    if(e.key==='Anasayfa'){
      
      navigate("/")
    }
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['Puanlama']}
      defaultOpenKeys={['sub3']}
      mode="inline"
      items={items}
    />
  );
};
export default NavigationPage;