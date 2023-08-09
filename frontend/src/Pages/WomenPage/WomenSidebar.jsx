import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const WomenSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const initialFit = searchParams.getAll("fit");
  const [category, setCategory] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [fit, setFit] = useState(initialFit || []);
  console.log(initialState);

  const handleChange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };


 const handleFit = (e) => {
  let newFit = [...fit];
  let fitvalue = e.target.value;

  if(newFit.includes(fitvalue)){
    newFit.splice(newFit.indexOf(fitvalue),1);
  }else{
    newFit.push(fitvalue);
  }
  setFit(newFit)
 }


  useEffect(() => {
    let params = {
      category,
      fit
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category,fit, order]);

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="T-shirt"
                onChange={handleChange}
                checked={category.includes("T-shirt")}
              />
              <label>T-Shirt</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="jeggings"
                onChange={handleChange}
                checked={category.includes("jeggings")}
              />
              <label>Jeggings</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="Pyjama"
                onChange={handleChange}
                checked={category.includes("Pyjama")}
              />
              <label>Pyjama</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="Kurta"
                onChange={handleChange}
                checked={category.includes("Kurta")}
              />
              <label>Kurta</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="Jacket"
                onChange={handleChange}
                checked={category.includes("Jacket")}
              />
              <label>Jacket</label>
            </Box>

            {/* <Checkbox fontSize='12px' fontWeight={400} fontFamily="Merriweather">T-Shirt</Checkbox>
     <Checkbox fontSize='12px' fontWeight={400} fontFamily="Merriweather">Shirt</Checkbox>
     <Checkbox fontSize='12px' fontWeight={400} fontFamily="Merriweather">Joggers</Checkbox>
     <Checkbox fontSize='12px' fontWeight={400} fontFamily="Merriweather">Hoodies</Checkbox>
     <Checkbox fontSize='12px' fontWeight={400} fontFamily="Merriweather">Jacket</Checkbox> */}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Sort By
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            display="flex"
            flexDirection="column"
            gap="5px"
            alignItems="flex-start"
            onChange={handleSort}
          >
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value={"asc"}
                defaultChecked={order === "asc"}
              />
              <label>Price: Low To High</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value={"desc"}
                defaultChecked={order === "desc"}
              />
              <label>Price High to Low</label>
              <br />
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Fit
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
             <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="PLUS SIZE"
                onChange={handleFit}
                checked={fit.includes("PLUS SIZE")}
              />
              <label>Plus Size</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="OVERSIZED FIT"
                onChange={handleFit}
                checked={fit.includes("OVERSIZED FIT")}
              />
              <label>Oversized</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="DESIGN OF THE WEEK"
                onChange={handleFit}
                checked={fit.includes("DESIGN OF THE WEEK")}
              />
              <label>Design of The Week</label>
              <br />
            </Box>
            <Box display="flex" gap="5px">
              <input
                type="checkbox"
                value="Loose Fit"
                onChange={handleFit}
                checked={fit.includes("Loose Fit")}
              />
              <label>Loose Fit</label>
              <br />
            </Box>
          
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default WomenSidebar;
