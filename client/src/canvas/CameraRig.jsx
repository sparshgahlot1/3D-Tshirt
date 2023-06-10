import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'

import state from '../store'

const CameraRig = ({children}) => {

  const group = useRef();
  const snap = useSnapshot(state);

  //setting the model rotation

  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig