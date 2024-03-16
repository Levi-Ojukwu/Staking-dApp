import React from 'react'
import usePools from '../hooks/usePool'
import {Box, Flex, Card} from "@radix-ui/themes"; 

const Pools = () => {
    const poolID = usePools()
    const poolIds = [...Array.from({ length: poolID })].map((_, index) => index);
    console.log(poolIds)
    return (
        <Flex gap={"6"} className="my-6 p-2">
            {poolIds.map((id) => {
    return(
                <Card
                size="1"
                style={{ width: 145, height: 110, backgroundColor: "#EFEFEF", marginTopTop: 2 }}
        >
            <p>Pool:{id}</p>
                <p>Amount Stake: 0</p>
         <p>Reward Rate: 0</p> 
            </Card>
    ) 
})}
        </Flex>
  )
}

export default Pools

