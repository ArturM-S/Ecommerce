import { useEffect, useState } from 'react';
import {
    Container,
    FilterBar,
    ProductImg,
    ProductName,
    ProductPrice,
    ProductItem,
    ProductList,
    Content,
    AddedMsg,
} from '../../../shared/pages/Store/styles';
import { useCart } from '../../service/hooks/useCart';

export default function Store() {
    const [forceRender, setForceRender] = useState(false);
    const [electronics, setElectronics] = useState([]);
    const { addItem } = useCart();
    const [search, setSearch] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    function overflow(title: string, limit = 20) {
        if (title.length > limit) {
            return `${title.substring(0, limit)}...`;
        }
        return title;
    }
    const majorToMinorFilter = () => {
        electronics.sort(function (a, b) {
            return a.price - b.price;
        });
        setForceRender(!forceRender);
    };

    const minorToMajorFilter = () => {
        electronics.sort(function (a, b) {
            return b.price - a.price;
        });
        setForceRender(!forceRender);
    };

    function handleAddProduct(electronic) {
        setIsAdded(true);
        addItem(electronic);
        setTimeout(() => {
            setIsAdded(false);
        }, 800);
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => setElectronics(json));
    }, []);

    const filteredElectronics =
        search.length > 0
            ? electronics.filter(electronic =>
                  electronic.title.toLowerCase().includes(search),
              )
            : [];

    return (
        <Container>
            <FilterBar>
                Ordenar:
                <button type="button" onClick={() => majorToMinorFilter()}>
                    menor pra maior
                </button>
                <button type="button" onClick={() => minorToMajorFilter()}>
                    maior pra menor
                </button>
            </FilterBar>
            <Content>
                <input
                    style={{
                        width: '300px',
                    }}
                    placeholder="buscar..."
                    type="text"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <AddedMsg isAdded={isAdded}>
                    Produto adicionado ao carrinho!
                </AddedMsg>
                <ProductList>
                    {search.length > 0
                        ? filteredElectronics.map(electronic => (
                              <ProductItem key={electronic.id}>
                                  <ProductImg
                                      src={electronic.image}
                                      alt={electronic.title}
                                  />
                                  <ProductName>{electronic.title}</ProductName>
                                  <ProductPrice>
                                      R$ {electronic.price},00
                                      <button
                                          type="button"
                                          onClick={() =>
                                              handleAddProduct(electronic)
                                          }
                                          style={{
                                              backgroundColor: 'blue',
                                              color: 'white',
                                          }}
                                      >
                                          +
                                      </button>
                                  </ProductPrice>
                              </ProductItem>
                          ))
                        : electronics.map(electronic => (
                              <ProductItem key={electronic.id}>
                                  <ProductImg
                                      src={electronic.image}
                                      alt={electronic.title}
                                  />
                                  <ProductName>
                                      {overflow(electronic.title)}
                                  </ProductName>
                                  <ProductPrice>
                                      R$ {electronic.price},00
                                      <button
                                          type="button"
                                          onClick={() =>
                                              handleAddProduct(electronic)
                                          }
                                          style={{
                                              backgroundColor: 'blue',
                                              color: 'white',
                                          }}
                                      >
                                          +
                                      </button>
                                  </ProductPrice>
                              </ProductItem>
                          ))}
                </ProductList>
            </Content>
        </Container>
    );
}
