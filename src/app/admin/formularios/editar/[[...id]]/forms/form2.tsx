import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario1Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario1({ formulario, handleSalvar }: Formulario1Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.audio1 && typeof (dados.audio1) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela1/audio1.mp3'), dados.audio1)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio2 && typeof (dados.audio2) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela1/audio2.mp3'), dados.audio2)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem && typeof (dados.imagem) != 'string') {
      //converte a imagem para blob
      await uploadBytesResumable(ref(storage, 'tela1/imagem.jpg'), dados.imagem)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem = await getDownloadURL(snapshot.ref);
        })
    }

    handleSalvar(dados);
  }

  return (
    <Formik
      initialValues={formulario}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <div className="card-body">
            <div className="row">

              {/* AUDIO 1 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Nome</label>
                  <Field as="textarea" className="form-control" name="nome" />
                </div>
              </div>

              {/* TEXTO  1 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Palavras chave</label>
                  <Field as="textarea" className="form-control" name="key" />
                </div>
              </div>

              {/* AUDIO 2 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Descrição</label>
                  <Field as="textarea" className="form-control" name="descricao" />
                </div>
              </div>

              {/* TEXTO  2 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Propósito</label>
                  <Field as="textarea" className="form-control" name="proposito" />
                </div>
              </div>

              {/* IMAGEM */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Fonte</label>
                  <Field as="textarea" className="form-control" name="fonte" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Autores</label>
                  <Field as="textarea" className="form-control" name="autores" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Data</label>
                  <Field as="textarea" className="form-control" name="data" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Tipo</label>
                  <Field as="textarea" className="form-control" name="tipo" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Relações na literatura atual</label>
                  <Field as="textarea" className="form-control" name="relacao" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Revisão por pares</label>
                  <Field as="textarea" className="form-control" name="revisao" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Consistente com a literatura anterior</label>
                  <Field as="textarea" className="form-control" name="consistencia" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto de amostra</label>
                  <Field as="textarea" className="form-control" name="amostra" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Aplicabilidade</label>
                  <Field as="textarea" className="form-control" name="aplicabilidade" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Implementação</label>
                  <Field as="textarea" className="form-control" name="implementacao" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Usos conhecidos</label>
                  <Field as="textarea" className="form-control" name="usos" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Possíveis viéses</label>
                  <Field as="textarea" className="form-control" name="vieses" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Inexistência de conflitos de interesses</label>
                  <Field as="textarea" className="form-control" name="conflitos" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Síntese da análise</label>
                  <Field as="textarea" className="form-control" name="sintese" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Verificar relevância</label>
                  <Field as="textarea" className="form-control" name="relevancia" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Verificar cobertura</label>
                  <Field as="textarea" className="form-control" name="cobertura" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Verificar força</label>
                  <Field as="textarea" className="form-control" name="forca" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Grau de importância</label>
                  <Field as="textarea" className="form-control" name="importancia" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Probabilidade de falha</label>
                  <Field as="textarea" className="form-control" name="falha" />
                </div>
              </div>








              {/* BOTÃO */}
              <div className="col-md-12">
                <div className="form-group">
                  <button className='btn btn-primary w-100' type="submit" disabled={isSubmitting}>Salvar</button>
                </div>
              </div>

              {/* BOTÃO VOLTAR */}
              <div className="col-md-12">
                <div className="form-group">
                  <Link href={`/admin/formularios/`} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Back form">
                    Voltar
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </Form>)}
    </Formik>
  );
}
