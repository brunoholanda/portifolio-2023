import ModalAdd from 'components/Modals/modalAdd';
import React, { useState, useEffect } from 'react';
import './Painel.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const baseUrl = 'http://localhost:8000';

const OperatorPanel = ({ addPost, editPost, editedPost, setEditedPost, cancelEdit }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [project_link, setProject_link] = useState('');
  const [repo_link, setRepo_link] = useState('');
  const [isFormIncomplete, setIsFormIncomplete] = useState(false);

  useEffect(() => {
    setTitle(editedPost?.title || '');
    setImage(editedPost?.image || '');
    setSummary(editedPost?.summary || '');
    setDescription(editedPost?.description || '');
    setSkills(editedPost?.skills || '');
    setProject_link(editedPost?.project_link || '');
    setRepo_link(editedPost?.repo_link || '');
  }, [editedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === '' || summary === '' || description === '' || skills === '' || project_link === '' || repo_link === '') {
      setIsFormIncomplete(true);
      setTimeout(() => {
        setIsFormIncomplete(false);
      }, 5000);

      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('summary', summary);
    formData.append('description', description);
    formData.append('skills', skills);
    formData.append('project_link', project_link);
    formData.append('repo_link', repo_link);

    if (editedPost) {
      editPost(editedPost.id, formData);
    } else {
      addPost(formData);
    }

    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setImage('');
    setSummary('');
    setDescription('');
    setSkills('');
    setProject_link('');
    setRepo_link('');
    setEditedPost(null);
  };

  const [fileName, setFileName] = React.useState('');

  const onChangeHandler = (e) => {
    setImage(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <div className='formulario'>
      <h2>Insira os dados do seu projeto!</h2>
      {isFormIncomplete && (
        <p className="error">Por favor, preencha todos os campos !</p>
      )}

      <form className='painel' onSubmit={handleSubmit}>
        <div>
          <input type="text" id="title" className={title === '' ? 'required-field' : ''} placeholder='Insira o Título do Projeto' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='imagem'>
          <input
            type="file"
            id="image"
            style={{ display: 'none' }}
            onChange={onChangeHandler}
          />
          <label htmlFor="image" className='imagemBotao'>
            Escolha uma imagem
          </label>
          {fileName && <p><strong>Arquivo:</strong> "{fileName}"</p>}
        </div>
        <div>
          <textarea
            id="summary"
            className={summary === '' ? 'required-field' : ''}
            placeholder='Resumo do projeto'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div>
          <textarea
            id="description"
            className={description === '' ? 'required-field' : ''}
            placeholder='Descrição completa do projeto'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input type="text" id="skills" className={skills === '' ? 'required-field' : ''} placeholder='Habilidades' value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>
        <div>
          <input
            type="text"
            id="projectLink"
            className={project_link === '' ? 'required-field' : ''}
            placeholder='Link do Projeto'
            value={project_link}
            onChange={(e) => setProject_link(e.target.value)}
          />
        </div>
        <div>
          <input type="text" id="repoLink" className={repo_link === '' ? 'required-field' : ''} placeholder='Link do GitHub' value={repo_link} onChange={(e) => setRepo_link(e.target.value)} />
        </div>
        {editedPost ? (
          <>
            <button type="submit">Salvar</button>
            <button onClick={cancelEdit}>Cancelar</button>
          </>
        ) : (
          <button type="submit">Adicionar Post</button>
        )}
      </form>
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [editedPost, setEditedPost] = useState(null);

  const addPost = async (formData) => {
    try {
      const response = await fetch(`${baseUrl}/api/posts`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar o post');
      }

      const newPost = await response.json();
      setPosts([...posts, newPost]);
    } catch (error) {
      console.error(error);
    }
  };


  const editPost = async (postId, formData) => {
    try {
      const response = await fetch(`${baseUrl}/api/posts/${postId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao editar o post');
      }

      const updatedPost = await response.json();
      setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
      setEditedPost(null);
    } catch (error) {
      console.error(error);
    }
  };


  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${baseUrl}/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o post');
      }

      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error(error);
    }
  };

  const cancelEdit = () => {
    setEditedPost(null);
  };

  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/posts`)
      .then(resposta => resposta.json())
      .then(dados => {
        setProjetos(dados)

      })
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        const response = await fetch('http://localhost:8000/api/posts');
        if (!response.ok) {
          throw new Error('Erro ao obter os posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='page'>
        <h1>Painel do Operador</h1>
        <p>Aqui é possivel adicionar, remover ou alterar projetos</p>
        <button onClick={handleOpenModal}>Adicionar Post</button>
      </div>
      <ModalAdd isOpen={isModalOpen} close={handleCloseModal}>
        <OperatorPanel
          addPost={addPost}
          editPost={editPost}
          editedPost={editedPost}
          setEditedPost={setEditedPost}
          cancelEdit={cancelEdit}
        />
      </ModalAdd>
      {posts.map((post, index) => (
        <div key={index} className='postagem'>
          <h2><strong>Titulo:</strong> {post.title}</h2>
          <img src={`${baseUrl}/${post.image.replace(/\\/g, '/')}`} alt={post.title} />
          <p><strong>Resumo:</strong> {post.summary}</p>
          <strong>Postagem Completa</strong>
          <ReactMarkdown>
            {post.description.replace(/\\n/g, '\n')}
          </ReactMarkdown>
          <p><strong>Habilidades:</strong> {post.skills}</p>
          <a href={post.project_link} target="_blank" rel="noreferrer noopener">Link do Projeto</a>
          <a href={post.repo_link} target="_blank" rel="noreferrer noopener">Link do Repositório</a>
          <div className='postagemBotoes'>
            <button onClick={() => { setEditedPost(post); handleOpenModal(); }}>Editar</button>
            <button onClick={() => deletePost(post.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
};



export default Posts;