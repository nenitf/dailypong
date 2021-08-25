import React from 'react'
import { Table, Button } from 'react-bulma-components';

import { useColegas } from 'contexts/colegas'

export function TabelaDeContatos() {
  const { colegas, setColegas } = useColegas()

  function handleExcluir(index: number){
    setColegas(colegas.filter((c, i) => i !== index))
  }

  return (
    <main>
      <Table size='fullwidth' hoverable>
        <thead>
          <tr>
            <th>Falou</th>
            <th>Colega</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {colegas.map((nome, i) => (
            <tr key={i}>
              <td>
                <input type='checkbox'/>
              </td>
              <td>
                {nome}
              </td>
              <td>
                <Button
                  color='danger'
                  onClick={(e: React.FormEvent) => handleExcluir(i)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
}