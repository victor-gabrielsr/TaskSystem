use corporativo
go
CREATE TABLE Tarefas
(	
	IdTarefa INT NOT NULL,
	NomeTarefa VARCHAR(30),
	Descricao VARCHAR(400),
	DataTarefa DATETIME,
	Prioridade INT,
	Responsavel VARCHAR(20)
)