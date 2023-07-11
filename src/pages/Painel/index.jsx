import CardUpdate from 'components/CardUpdate';
import React, { useState, useEffect } from 'react';

const OperatorPanel = ({ addPost, editPost, editedPost, setEditedPost, cancelEdit }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [repoLink, setRepoLink] = useState('');

  useEffect(() => {
    setTitle(editedPost?.title || '');
    setImage(editedPost?.image || '');
    setSummary(editedPost?.summary || '');
    setDescription(editedPost?.description || '');
    setSkills(editedPost?.skills || '');
    setProjectLink(editedPost?.projectLink || '');
    setRepoLink(editedPost?.repoLink || '');
  }, [editedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      image,
      summary,
      description,
      skills,
      projectLink,
      repoLink,
    };
    if (editedPost) {
      editPost(editedPost.id, post);
    } else {
      addPost(post);
    }
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setImage('');
    setSummary('');
    setDescription('');
    setSkills('');
    setProjectLink('');
    setRepoLink('');
    setEditedPost(null);
  };

  return (
    <div>
      <h2>Painel do Operador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="image">Imagem do Projeto:</label>
          <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <label htmlFor="summary">Resumo:</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="skills">Habilidades:</label>
          <input type="text" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>
        <div>
          <label htmlFor="projectLink">Link do Projeto:</label>
          <input
            type="text"
            id="projectLink"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="repoLink">Link do Repositório:</label>
          <input type="text" id="repoLink" value={repoLink} onChange={(e) => setRepoLink(e.target.value)} />
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

  const addPost = async (post) => {
    try {
      const response = await fetch('http://localhost:8000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
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

  const editPost = async (postId, post) => {
    try {
      const response = await fetch(`http://localhost:8000/api/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
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
      const response = await fetch(`http://localhost:8000/api/posts/${postId}`, {
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
      fetch('http://localhost:8000/api/posts')
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

  return (
    <div>
      <h1>Meu Portfólio</h1>
      <OperatorPanel
        addPost={addPost}
        editPost={editPost}
        editedPost={editedPost}
        setEditedPost={setEditedPost}
        cancelEdit={cancelEdit}
      />
      <h2>Posts Recentes:</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} />
          <p>{post.description}</p>
          <p>Habilidades: {post.skills}</p>
          <a href={post.projectLink}>Link do Projeto</a>
          <a href={post.repoLink}>Link do Repositório</a>
          <button onClick={() => setEditedPost(post)}>Editar</button>
          <button onClick={() => deletePost(post.id)}>Excluir</button>

          <div>
                <h2>Projetos</h2>
                <h3>Meus projetos mais recentes</h3>
            </div>
            <div>
                {projetos.slice(0, 6).map((projeto) => {
                    return <CardUpdate {...projeto} key={projeto.id} />
                })}
            </div>
        </div>
      ))}
    </div>
  );
};



export default Posts;
