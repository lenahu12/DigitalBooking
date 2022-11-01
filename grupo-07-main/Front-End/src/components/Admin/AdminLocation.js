import React, {useContext, useEffect , useState} from 'react'
import Select from "react-select";
import { CreateCarContext } from '../../context/Admin/CreateCarContext';
import { CategoryContext } from "../../context/Category/CategoryContext"
import { CityContext } from "../../context/City/CityContext"

const AdminLocation = ({errors}) => {

  /* context */
  const {categories} = useContext(CategoryContext);
  const {cities} = useContext(CityContext);

  const {setTitle, setCategory, setDescription, setCity, setLocation} = useContext(CreateCarContext);


  const [categoriesOptions, setCategoriesOptions] = useState("");
  const [cityOptions, setCityOptions] = useState("");

  useEffect(()=>{
    if(categories.data){
      const categoriesOptions = categories.data.map((category) => {
        return {
          label: category.title,
          value: category.id,
        };
      })
      setCategoriesOptions(categoriesOptions);
    }
  },[categories])

  useEffect(()=>{
    if(cities.data){
      const cityOptions = cities.data.map((city) => {
        return {
          label: city.name+", "+city.country,
          value: city.id,
        };
      })
      setCityOptions(cityOptions);
    }
  },[cities])


  return (
    <>
    <div className="adminForm-divLocation">
            <label htmlFor="" className="adminForm-Label">
              Nombre del auto
              <input
                type="text"
                className="adminForm-input"
                placeholder="Fiat uno"
                onChange={(e) => setTitle(e.target.value)}
              />
              <small className="errors">{errors.title}</small>
            </label>

            <label htmlFor="" className="adminForm-Label">
              Categoria
              <Select
              options={categoriesOptions}
              placeholder="Seleccionar la categoria"
              defaultValue=""
              onChange={e => setCategory(e.value)}
              />
              <small className="errors">{errors.category}</small>
            </label>

            <label htmlFor="" className="adminForm-Label">
              Dirección
              <input
                type="text"
                className="adminForm-input"
                placeholder="Manuel Belgrano 213"
                onChange={e => setLocation(e.target.value)}
              />
              <small className="errors">{errors.location}</small>
            </label>
            <label htmlFor="" className="adminForm-Label">
              Ciudad
              <Select
              placeholder="Seleccionar la ciudad"
              defaultValue=""
              onChange={(e) => {
                setCity(e.value)
              }}              
              options={cityOptions}/>
              <small className="errors">{errors.city}</small>
            </label>
          </div>
          <div>
            <label className="adminForm-Label">
              Descripción
              <textarea
                className="adminForm-textarea"
                name=""
                id=""
                cols="20"
                rows="6"
                placeholder="Escribir aquí la descripción del vehiculo"
                onChange={(e) => setDescription(e.target.value)}
              />
              <small className="errors">{errors.description}</small>
            </label>
          </div>
    </>
  )
}

export default AdminLocation