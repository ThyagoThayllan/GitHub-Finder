import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs'
import styles from './Search.module.css'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

export const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState('');

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName);
        }
    }

    return (
        <div className={styles.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios.</p>
            <div className={styles.searchContainer}>
                <input
                    type="search"
                    name="usuario"
                    placeholder="Digite o nome do usuário"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    type="submit"
                    onClick={() => loadUser(userName)}
                >
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}