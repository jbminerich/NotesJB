import React from 'react';
import { Paper, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const NoteDetail = ({ note }) => {
    return (
        <Paper style={{ padding: '16px', marginTop: '16px' }}>
            <Typography variant="h6" gutterBottom>
                {note.title}
            </Typography>
            <ReactMarkdown
                children={note.content}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={oneDark}
                                language={match[1]}
                                PreTag="div"
                                showLineNumbers={true}
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            />
        </Paper>
    );
};

export default NoteDetail;
