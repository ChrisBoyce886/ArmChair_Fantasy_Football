DROP DATABASE IF EXISTS fantasyStats;
CREATE DATABASE fantasyStats;
USE fantasyStats;

CREATE TABLE QB (
	Position_Rank INT (2) NOT NULL,
	Name VARCHAR(100) NOT NULL,
    Team VARCHAR(3) NOT NULL,
    Position VARCHAR(2) NOT NULL,
    Passing_Yards INT(4) NOT NULL,
    Passing_Touchdowns INT(2) NOT NULL,
    Interceptions INT(2) NOT NULL,
    Completion_Percentage DECIMAL(4,2) NOT NULL,
    Rushing_Yards INT(3) NOT NULL,
    Rushing_Touchdowns INT(2) NOT NULL,
    PRIMARY KEY (Position_Rank)
);

CREATE TABLE RB (
    Position_Rank INT (2) NOT NULL,
    Name VARCHAR (100) NOT NULL,
    Team VARCHAR (4) NOT NULL,
    Position VARCHAR(3) NOT NULL,
    Rushing_Attempts INT (3) NOT NULL,
    Rushing_Yards INT (4) NOT NULL,
    Rushing_Touchdowns INT (2) NOT NULL,
    Receptions INT (3) NOT NULL,
    Receiving_Yards INT (3) NOT NULL,
    Receiving_Touchdowns INT (2) NOT NULL,
    PRIMARY KEY (Position_Rank)
);

CREATE TABLE WR (
    Position_Rank INT (2) NOT NULL,
    Name VARCHAR (100) NOT NULL,
    Team VARCHAR (4) NOT NULL,
    Position VARCHAR(3) NOT NULL,
    Receptions INT (3) NOT NULL,
    Receiveing_Yards INT (3) NOT NULL,
    Receiving_Touchdowns INT (2) NOT NULL,
    Yards_Per_Reception DECIMAL (4,2) NOT NULL,
    Receptions_Per_Game DECIMAL (4,2) NOT NULL,
    Receiving_Yards_Per_Game DECIMAL (4,2) NOT NULL,
    PRIMARY KEY (Position_Rank)
);

CREATE TABLE TE (
    Position_Rank INT (2) NOT NULL,
    Name VARCHAR (100) NOT NULL,
    Team VARCHAR (4) NOT NULL,
    Position VARCHAR(3) NOT NULL,
    Receptions INT (3) NOT NULL,
    Receiving_Yards INT (3) NOT NULL,
    Receiving_Touchdowns INT (2) NOT NULL,
    Yards_Per_Reception DECIMAL (4,2),    
    Receptions_Per_Game DECIMAL (4,2) NOT NULL,
    Receiving_Yards_Per_Game DECIMAL (4,2) NOT NULL,
    PRIMARY KEY (Position_Rank)
);

CREATE TABLE K (
    Position_Rank INT (2) NOT NULL,
    Name VARCHAR (100) NOT NULL,
    Team VARCHAR (4) NOT NULL,
    Position VARCHAR(3) NOT NULL,
    Field_Goals_Attempted INT (2) NOT NULL,
    Field_Goals_Made INT (2) NOT NULL,
    Field_Goal_Percentage DECIMAL (4,2) NOT NULL,
    Extra_Points_Attempted INT (2) NOT NULL,
    Extra_Points_Made INT (2) NOT NULL,
    Extra_Points_Percentage DECIMAL (4,2) NOT NULL,
    PRIMARY KEY (Position_Rank)	
);

CREATE TABLE DST (
    Position_Rank INT (2) NOT NULL,
    Team_Name VARCHAR (15) NOT NULL,
    Tackles INT (4) NOT NULL,
    Sacks INT (2) NOT NULL,
    Interceptions INT (2) NOT NULL,
    INT_Touchdowns INT (1) NOT NULL,
    Forced_Fumbles INT (2) NOT NULL,
    FF_Touchdowns INT (1) NOT NULL,
    PRIMARY KEY (Position_Rank)	
);


SELECT * FROM fantasystats.qb;
SELECT * FROM fantasystats.rb;
SELECT * FROM fantasystats.wr;
SELECT * FROM fantasystats.te;
SELECT * FROM fantasystats.k;
SELECT * FROM fantasystats.dst;