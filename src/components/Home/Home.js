import React from 'react';
import {Link} from 'react-router-dom';
import GithubLogo from '../../assets/github-logo-2.png';
import faChess from '../Loader/fa-chess.js';


import './Home.css';

export default function Home() {
    return (
        <div className="container about">
            <h2>About</h2>
            <p>
            ALPHA4 is a CHESS ENGINE built using Artificial Intelligence (A.I.), Machine Learning (M.L.) and Deep Learning and also many concepts of Artificial Intelligence.
            ALPHA4 consists of a chess engine that uses an iterative deepening search and various optimizations to find the best move. ALHPA4 is written in Javascript and built from scratch. 
            The engine is connected to a chess board so that one can play against it.

            </p>
            <div className="btn-group">
                <a href="https://github.com/yashwalker7/ALPHA4" target="_blank" rel="noopener noreferrer" className="btn btn-dark github">
                    <img src={GithubLogo} alt="Github Logo" />
                    <span>Github Repo</span>
                </a>
                
                <Link to="/ai" className="btn btn-success">
                    <svg height="30" viewBox="0 0 32 32" style={{marginRight: "2px"}}><g>{faChess.knight}</g></svg>
                    Play vs AI
                </Link>

                <Link to="/analysis" className="btn btn-dark">
                    <svg width="32" viewBox="0 0 32 32"><g>{faChess.search}</g></svg>
                    Analysis Board
                </Link>
            </div>
        </div>
    );
}