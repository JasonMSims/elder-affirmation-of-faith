# Harbins Community Baptist Church &mdash; Elder Affirmation of Faith

This document contains the Elder Affirmation of Faith for Harbins Community Baptist Church. It is an adaptation and expansion upon the Second London Baptist Confession of Faith (1689). The purpose of this document is to provide a clear and concise statement of the beliefs that are held by the elders of Harbins Community Baptist Church.

## Getting Started

Clone the repository and run the following command to install the necessary dependencies:

```bash
npm install
```

Download and install [the latest version of Prince](https://www.princexml.com/download/) to generate the PDF:

### MacOS

Using the terminal, navigate to the directory where the downloaded file is located and run the following command to install Prince:

```bash
./install.sh
```

Press enter to accept the default installation directory.

### Windows

Run the downloaded installer and follow the installation instructions.

## Building the PDF

Build the content using SSG (Static Site Generator) by running the following command:

```bash
npm run build
```

> [!TIP]
> Navigate to [http://localhost:4173](http://localhost:4173) in your browser to view the document.

To generate the PDF, run the following command:

```bash
prince http://localhost:4173 -o output/output.pdf
```

Change the output file name and path as needed.
